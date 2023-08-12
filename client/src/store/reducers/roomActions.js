export const roomActions = {
  OPEN_ROOM: 'ROOM.OPEN_ROOM',
  SET_ROOM_DETAILS: 'ROOM.SET_ROOM_DETAILS',
  SET_ACTIVE_ROOMS: 'ROOM.SET_ACTIVE_ROOMS',
  SET_LOCAL_STREAM: 'ROOM.SET_LOCAL_STREAM',
  SET_REMOTE_STREAMS: 'ROOM.SET_REMOTE_STREAMS',
  SET_AUDIO_ONLY: 'ROOM.SET_AUDIO_ONLY',
  SET_SCREEN_SHARE_STREAM: 'ROOM.SET_SCREEN_SHARE_STREAM',
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
