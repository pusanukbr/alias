import React from "react";
import JoinBlock from "./components/JoinBlock";
import Game from "./components/gameActive/GameBlock";
import reducer from "./reducer";
// import socket from "./socket";
import axios from "axios";
// chakra
import {
  ChakraProvider,
} from '@chakra-ui/react';

function App() {
  const [stateTimer, setStateTimer] = React.useState(null)
  const [stateTimeLeft, setStateTimeLeft] = React.useState(null)
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [
      {
        userName: 'test',
        userScopes: 4,
      },
      {
        userNane: 'test2',
        userScopes: 9
      }
    ],
    sec: 90,
  });

  // const setUsers = (users) => {
  //   dispatch({
  //     type: 'SET_USERS',
  //     payload: users,
  //   })
  // };

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
  React.useEffect(() => {
    function startTimer() {
      clearInterval(stateTimer)
      const timer = setInterval(() => {
        const timeLeft = stateTimeLeft - 1;
        if (timeLeft === 0) clearInterval(timer);
        setStateTimeLeft(timeLeft);
      }, 1000);
      return (
        setStateTimer(timer),
        setStateTimeLeft(state.sec)
      )
    };
    // socket.on('ROOM:SET_USERS', setUsers);
  }, [])
  https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks  
  return (
    <ChakraProvider>
      <div className="wrapper">
        <div className="content">
          {state.joined
            ? <JoinBlock onLogin={onLogin} />
            : <Game
                { ...state }
                stateTimer={stateTimeLeft}
                startTimer={startTimer}/>
          }
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
