export const roomActions = {
  OPEN_ROOM: 'ROOM.OPEN_ROOM',
  SET_ROOM_DETAILS: 'ROOM.SET_ROOM_DETAILS',
  SET_ACTIVE_ROOMS: 'ROOM.SET_ACTIVE_ROOMS',
  SET_LOCAL_STREAM: 'ROOM.SET_LOCAL_STREAM',
  SET_REMOTE_STREAMS: 'ROOM.SET_REMOTE_STREAMS',
  SET_AUDIO_ONLY: 'ROOM.SET_AUDIO_ONLY',
  SET_SCREEN_SHARING_STREAM: 'ROOM.SET_SCREEN_SHARING_STREAM',
  SET_IS_USER_JOINED_WITH_ONLY_AUDIO: 'ROOM.SET_IS_USER_JOINED_WITH_ONLY_AUDIO',
};

export const getActions = (dispatch) => {
  return {
    setOpenRoom: (isUserRoomCreator, isUserInRoom) =>
      dispatch(setOpenRoom(isUserRoomCreator, isUserInRoom)),
    setRoomDetails: (roomDetails) => dispatch(setRoomDetails(roomDetails)),
    setActiveRooms: (activeRooms) => dispatch(setActiveRooms(activeRooms)),
    setLocalStream: (stream) => dispatch(setLocalStream(stream)),
    setRemoteStreams: (streams) => dispatch(setRemoteStreams(streams)),
    setAudioOnly: (isAudioOnly) => dispatch(setAudioOnly(isAudioOnly)),
    setScreenSharingStream: (stream) =>
      dispatch(setScreenSharingStream(stream)),
  };
};

export const setOpenRoom = (
  isUserRoomCreator = false,
  isUserInRoom = false
) => ({
  type: roomActions.OPEN_ROOM,
  payload: {
    isUserRoomCreator,
    isUserInRoom,
  },
});

export const setRoomDetails = (roomDetails) => ({
  type: roomActions.SET_ROOM_DETAILS,
  payload: {
    roomDetails,
  },
});

export const setActiveRooms = (activeRooms) => ({
  type: roomActions.SET_ACTIVE_ROOMS,
  payload: {
    activeRooms,
  },
});

export const setLocalStream = (stream) => ({
  type: roomActions.SET_LOCAL_STREAM,
  payload: {
    stream,
  },
});

export const setRemoteStreams = (remoteStreams) => ({
  type: roomActions.SET_REMOTE_STREAMS,
  payload: {
    remoteStreams,
  },
});

export const setAudioOnly = (isAudioOnly) => ({
  type: roomActions.SET_AUDIO_ONLY,
  payload: {
    isAudioOnly,
  },
});

export const setScreenSharingStream = (stream) => ({
  type: roomActions.SET_SCREEN_SHARING_STREAM,
  payload: {
    screenSharingStream: stream ? stream : null,
    isScreenSharingActive: stream ? true : false,
  },
});

export const setIsUserJoinedWithOnlyAudio = (isUserJoinedWithOnlyAudio) => ({
  type: roomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO,
  payload: {
    isUserJoinedWithOnlyAudio,
  },
});
