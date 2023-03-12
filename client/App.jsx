import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import JoinBlock from './pages/Join';
import Loading from './components/ui/loading';
import Layout from './components/layout/Layout';
import RouterConfig from './const/RouterConfig';
import { setPreloader } from './store/reducer/ui';
import { checkAuth } from './store/reducer/users';
import Registration from './pages/Registration';
import Lobby from './pages/Lobby';
import ProtectedRoute from './hoc/ProtectedRoute';

function App(props) {
  React.useEffect(() => {
    if (localStorage.getItem('token') && !props.user.isAuth) {
      props.dispatch(checkAuth());
    } else {
      props.dispatch(setPreloader(false));
    }
  }, []);
  if (props.ui.preloader) {
    return <Loading />;
  }
  return (
    <Routes>
      <Route path={RouterConfig.MAIN.path} element={<Layout />}>
        {/* Login */}
        <Route path={RouterConfig.AUTH.path} element={<JoinBlock />} />
        <Route path={RouterConfig.REGISTRATION.path} element={<Registration />} />

        <Route path={RouterConfig.MAIN.path} element={<ProtectedRoute />}>
          <Route path={RouterConfig.LOBBY.path} element={<Lobby />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default connect(
  ({ user, ui }) => ({
    user,
    ui
  }),
  (dispatch) => ({ dispatch })
)(App);
