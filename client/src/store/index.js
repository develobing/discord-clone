import { composeWithDevTools } from 'redux-devtools-extension';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import alertReducer from './reducers/alertReducer';
import authReducer from './reducers/authReducer';
import friendsReducer from './reducers/friendsReducer';
import chatReducer from './reducers/chatReducers';

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  friends: friendsReducer,
  chat: chatReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
