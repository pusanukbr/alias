import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import JoinBlock from "./components/pages/Join";
import Loading from "./components/ui/loading";
import Layout from "./components/Layout";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Game from "./components/gameActive/GameBlock";
import RouterConfig from "./const/RouterConfig";
import { setPreloader } from './store/reducer/ui';
import { checkAuth } from "./store/reducer/users";
// import socket from "./socket";

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
  // React.useEffect(async () => {
  //   // socket.on('ROOM:SET_USERS', setUsers);
  // })
  React.useEffect(() => {
    if (localStorage.getItem('token') && !props.user.isAuth) {
        props.dispatch(checkAuth());
    }
  }, [])
  if (props.ui.preloader) {
    return <Loading/>
  }
  return (
    <Routes>
      <Route path={RouterConfig.MAIN.path} element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Game />} />
        </Route>
        <Route path={RouterConfig.AUTH.path} element={<JoinBlock/>} />
      </Route>
    </Routes>
  );
}

export default connect(({user, ui}) => ({
  user,
  ui
}), (dispatch) => ({dispatch}))(App);
