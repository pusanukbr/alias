import React from "react";
import JoinBlock from "./components/JoinBlock";
import Game from "./components/Game";
import reducer from "./reducer";
import { wordsRandom } from './const';
// import socket from "./socket";
import axios from "axios";

function App() {
  const [stateTimer, setStateTimer] = React.useState(null)
  const [stateTimeLeft, setStateTimeLeft] = React.useState(null)
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    word: wordsRandom(),
    sec: 90,
  });

  const startTimer = () => {
    clearInterval(stateTimer)
    const timer = setInterval(() => {
      const timeLeft = stateTimeLeft - 1;
      if (timeLeft === 0) clearInterval(timer);
      setStateTimeLeft(timeLeft);
    }, 1000);
    console.log(timer, stateTimeLeft);
    return (
      setStateTimer(timer),
      setStateTimeLeft(state.sec)
    )
  };

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    })
  };

  const onLogin = async (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    });
    // socket.emit('ROOM:JOIN', obj)
    console.log('test', obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    console.log(data);
    dispatch({
      type: 'SET_DATA',
      payload: data,
    })
  };
  function newWord() {
    dispatch({
      type: 'NEW_WORD',
      payload: wordsRandom()
    })
    console.log(state);
  };
  React.useEffect(() => {
    // socket.on('ROOM:SET_USERS', setUsers);
  }, [])
  
  return (
    <div className="wrapper">
      {!state.joined
       ? <JoinBlock onLogin={onLogin} />
       : <Game
          { ...state}
          stateTimer={stateTimeLeft}
          startTimer={startTimer}
          newWord={newWord} /> }
    </div>
  );
}

export default App;
