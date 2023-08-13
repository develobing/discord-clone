import store from '../store';
import { setLocalStream, setRemoteStreams } from '../store/actions/roomActions';
import Peer from 'simple-peer';
import * as socketConnection from '../sockets/socketConnection';

let peers = {};
const defaultConstraints = {
  video: true,
  audio: true,
};
const onlyAudioConstraints = {
  video: false,
  audio: true,
};
const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO: Add TURN ice servers here
  } else {
    console.warn('Using only STUN servers');
    return {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };
  }
};

export const getLocalStreamPreview = (onlyAudio = false, callback) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      if (typeof callback === 'function') callback();
    })
    .catch((error) => {
      console.log('getLocalStreamPreview() - error', error);
    });
};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;
  console.log('prepareNewPeerConnection() - isInitiator', isInitiator);

  if (isInitiator) {
    console.log('Preparing new peer connection as initiator');
  } else {
    console.log('Preparing new peer connection as not initiator');
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });

  peers[connUserSocketId].on('signal', (signal) => {
    console.log('Signal received - signal', signal);

    const signalData = {
      signal,
      connUserSocketId,
    };

    socketConnection.signalPeerData(signalData);

    // TODO: Send signal data to other users
    // socketConnection.signalPeerData(signalData);
  });

  peers[connUserSocketId].on('stream', (remoteStream) => {
    console.log('Remote Stream Received - remoteStream', remoteStream);

    // TODO: Add new remote stream to our server store

    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { signal, connUserSocketId } = data;
  const peer = peers[connUserSocketId];
  console.log('handleSignalingData() - data', data);

  if (!peer) return;

  peer.signal(signal);
};

const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const clearAllConnections = () => {
  Object.entries(peers).forEach(([connUserSocketId, peer]) => {
    if (peer) peer.destroy();
    delete peers[connUserSocketId];
  });
};

export const handleParticipantLeftRoom = (data) => {
  const { connUserSocketId } = data;
  const peer = peers[connUserSocketId];
  if (!peer) return;

  // Destroy peer
  peer.destroy();
  delete peers[connUserSocketId];

  // Remove stream
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = remoteStreams.filter(
    (stream) => stream.connUserSocketId !== connUserSocketId
  );

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const switchOutgoingTracks = (stream) => {
  for (const socket_id in peers) {
    for (const index in peers[socket_id].streams[0].getTracks()) {
      for (const index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
