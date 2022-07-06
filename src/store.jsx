import {combineReducers, createStore, applyMiddleware} from 'redux';

import * as ReduxDevToolsExt from 'redux-devtools-extension';

import Thunk from 'redux-thunk';


// import Middlewares


// import Reduser
import userReducer from './reducer/users';
import roomReducer from './reducer/rooms';
import uiReducer from './reducer/ui';
import wordReducer from './reducer/wordGame';
import gamesReducer from './reducer/games';

// Combine Reducer
const reducer = combineReducers({
  user: userReducer,
  room: roomReducer,
  ui: uiReducer,
  wordGames: wordReducer,
  games: gamesReducer
})

let store = null;

// export const getStore = () => {
//   return store;
// }

// export const getState = () => {
//   if(!store) return null;
//   return store.getState();
// }

store = createStore(
  reducer,
  ReduxDevToolsExt.composeWithDevTools({
    serialize: true,
    trace: true,
  })(
    applyMiddleware(
      Thunk.withExtraArgument()
    )
  )
)
export default store;