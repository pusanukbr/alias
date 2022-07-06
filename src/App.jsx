import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import JoinBlock from "./components/pages/Join";
import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import Game from "./components/gameActive/GameBlock";
import RouterConfig from "./const/RouterConfig";

// import socket from "./socket";
// chakra
import {
  ChakraProvider,
} from '@chakra-ui/react';

function App(props) {
  console.log(props);
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

export default connect(({user}) => ({
  user
}), (dispatch) => ({dispatch}))(App);
