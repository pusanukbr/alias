import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import JoinBlock from "./components/pages/Join";
import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";
import Game from "./components/gameActive/GameBlock";
import RouterConfig from "./const/RouterConfig";

// import socket from "./socket";
// chakra
import {
  ChakraProvider,
} from '@chakra-ui/react';

function App(props) {
  // const setUsers = (users) => {
  //   dispatch(setUser(users))
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
      <Routes>
        <Route path={RouterConfig.MAIN.path} element={<Layout />}>
          <Route index element={<RequireAuth><Game /></RequireAuth>} />
          <Route path={RouterConfig.AUTH.path} element={<JoinBlock/>} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default connect(({user, ui}) => ({
  user,
  ui
}), (dispatch) => ({dispatch}))(App);
