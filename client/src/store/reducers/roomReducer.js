import { roomActions } from '../actions/roomActions';

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  screenSharingStream: null,
  audioOnly: false,
  isScreenSharingActive: false,
  isUserJoinedWithOnlyAudio: false,
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

    case roomActions.SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.payload.stream,
      };

    case roomActions.SET_REMOTE_STREAMS:
      return {
        ...state,
        remoteStreams: action.payload.remoteStreams,
      };

    case roomActions.SET_AUDIO_ONLY:
      return {
        ...state,
        audioOnly: action.payload.isAudioOnly,
      };

    case roomActions.SET_SCREEN_SHARING_STREAM:
      return {
        ...state,
        screenSharingStream: action.payload.screenSharingStream,
        isScreenSharingActive: action.payload.isScreenSharingActive,
      };

    case roomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO:
      return {
        ...state,
        isUserJoinedWithOnlyAudio: action.payload.isUserJoinedWithOnlyAudio,
      };

    default:
      return state;
  }
};

export default roomReducer;
