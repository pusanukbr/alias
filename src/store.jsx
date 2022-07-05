import * as Redux from 'react-redux';

import * as ReduxDevToolsExt from 'redux-devtools-extension';

import Thunk from 'redux-thunk';


// import Middlewares


// import Reduser


let store = null;

export const getStore = () => {
  return store;
}

export const getState = () => {
  if(!store) return null;
  return store.getState();
}

export const createStore = ({}) => {
  // Start new store init value
  const initialState = {
    rooms: {
      roomId: 0,
      lang: 'ua',
      colorMode: 'ligth',
    },
    users: {
      userName: '',
      userToken: '',
      userActive: false,
      scope: 0,
      color: ''
    },
    games: {
      time: 90,
      mode: '',
      gameStart: false,
    },
    wordGame: {
      loseWord: [],
      winWord: []
    },
    ui: {
      preloader: true,
    }
  }

  store = Redux.createStore(
    // Combine Reducer
    Redux.combineReducers({
    }),
    ReduxDevToolsExt.composeWithDevTools({
      serialize: true,
      trace: true,
    })(
      Redux.applyMiddleware(
        Thunk.withExtraArgument()
      )
    )
  )



}