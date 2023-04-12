import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JoinBlock from './pages/Auth';
import Loading from './components/ui/loading';
import Layout from './components/layout/Layout';
import RouterConfig from './const/RouterConfig';
import { refreshUser } from './store/user/operations';
import Registration from './pages/Registration';
import Settings from './pages/Settings';
import ProtectedRoute from './hoc/ProtectedRoute';
import NotFound from './pages/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/user/selector';

export default function App() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  console.log(userData.user);

  React.useEffect(() => {
    dispatch(refreshUser());
  }, []);

  if (userData.user.isLoading) {
    return <Loading />;
  }
  return (
    <Routes>
      <Route path={RouterConfig.MAIN.path} element={<Layout />}>
        {/* Login */}
        <Route
          element={
            <ProtectedRoute redirectPath={userData.user.isAuth && RouterConfig.LOBBY.path} />
          }>
          <Route path={RouterConfig.AUTH.path} element={<JoinBlock />} />
        </Route>
        <Route
          element={
            <ProtectedRoute redirectPath={userData.user.isAuth && RouterConfig.LOBBY.path} />
          }>
          <Route path={RouterConfig.REGISTRATION.path} element={<Registration />} />
        </Route>
        <Route element={<ProtectedRoute param={userData.user.isAuth} />}>
          <Route path={RouterConfig.LOBBY.path} element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
