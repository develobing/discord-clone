import store from '../store';
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setScreenSharingStream,
  setRemoteStreams,
  setIsUserJoinedWithOnlyAudio,
} from '../store/actions/roomActions';
import * as socketConnection from '../sockets/socketConnection';
import * as webRTCHandler from '../webRTC/webRTCHandler';

export const createNewRoom = () => {
  const successCallback = () => {
    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setOpenRoom(true, true));
    store.dispatch(setIsUserJoinedWithOnlyAudio(audioOnly));
    socketConnection.createNewRoom();
  };

  const audioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, successCallback);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  const {
    auth: { userDetails },
    friends: { friends },
  } = store.getState();

  const rooms = [];
  activeRooms.forEach((room) => {
    const creatorId = room?.roomCreator?._userId;
    const isMyRoom = creatorId === userDetails._id;
    const owner = isMyRoom
      ? userDetails
      : friends.find((friend) => friend._id === creatorId);

    if (owner) {
      const creatorUsername = owner ? owner.username : 'Unknown';

      rooms.push({
        ...room,
        creatorUsername,
      });
    }
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallback = () => {
    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    store.dispatch(setIsUserJoinedWithOnlyAudio(audioOnly));
    socketConnection.joinRoom({ roomId });
  };

  const audioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, successCallback);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;
  const localStream = store.getState().room.localStream;
  const screenSharingStream = store.getState().room.screenSharingStream;

  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setScreenSharingStream(null));
  }

  store.dispatch(setRemoteStreams([]));
  webRTCHandler.clearAllConnections();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
