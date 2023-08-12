import { roomActions } from './roomActions';

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenShareStream: null,
  isScreenSharingActive: false,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case roomActions.OPEN_ROOM:
      return {
        ...state,
        isUserRoomCreator: action.payload.isUserRoomCreator,
        isUserInRoom: action.payload.isUserInRoom,
      };

    case roomActions.SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: action.payload.roomDetails,
      };

    case roomActions.SET_ACTIVE_ROOMS:
      return {
        ...state,
        activeRooms: action.payload.activeRooms,
      };

    default:
      return state;
  }
};

export default roomReducer;
