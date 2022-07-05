import React from "react";
import { Routes, Route } from "react-router-dom";
import JoinBlock from "./components/pages/Join";
import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import Game from "./components/gameActive/GameBlock";
import reducer from "./reducer";
import RouterConfig from "./const/RouterConfig";

// import socket from "./socket";
// chakra
import {
  ChakraProvider,
} from '@chakra-ui/react';

function App() {
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

  // const onLogin = async (obj) => {
  //   dispatch({
  //     type: 'JOINED',
  //     payload: obj
  //   });
  //   // socket.emit('ROOM:JOIN', obj)
  //   console.log('test', obj);
  //   const { data } = await axios.get(`/rooms/${obj.roomId}`);
  //   console.log(data);
  //   dispatch({
  //     type: 'SET_DATA',
  //     payload: data,
  //   })
  // };
  // React.useEffect(() => {
    // socket.on('ROOM:SET_USERS', setUsers);
  // }, [])
  
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes>
          <Route path={RouterConfig.MAIN.path} element={<Layout />}>
            <Route index element={<RequireAuth><Game /></RequireAuth>} />
            <Route path={RouterConfig.AUTH.path} element={<JoinBlock/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
