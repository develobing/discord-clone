import store from '../store';
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
} from '../store/reducers/roomActions';
import * as socketConnection from '../sockets/socketConnection';

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom();
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
  store.dispatch(setRoomDetails({ roomId }));
  store.dispatch(setOpenRoom(false, true));
  socketConnection.joinRoom({ roomId });
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;
  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
