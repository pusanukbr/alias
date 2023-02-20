import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import JoinBlock from "./pages/Join";
import Loading from "./components/ui/loading";
import Layout from "./components/Layout";
import RouterConfig from "./const/RouterConfig";
import { setPreloader } from './store/reducer/ui';
import { checkAuth } from "./store/reducer/users";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

function App(props) {
  React.useEffect(() => {
    if (localStorage.getItem('token') && !props.user.isAuth) {
        props.dispatch(checkAuth());
    } else {
      props.dispatch(setPreloader(false));
    }
  }, [])
  if (props.ui.preloader) {
    return <Loading/>
  }
  return (
    <Routes>

      <Route path={RouterConfig.MAIN.path} element={<Layout />}>

        {/* Main */}
        <Route index element={<Home />} />

        {/* Login */}
        <Route path={RouterConfig.AUTH.path} element={<JoinBlock/>} />
        <Route path={RouterConfig.REGISTRATION.path} element={<Registration/>} />

      </Route>
    </Routes>
  );
}

export default connect(({user, ui}) => ({
  user, ui
}), (dispatch) => ({dispatch}))(App);
