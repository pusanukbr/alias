import React from 'react';
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { FaSignOutAlt } from 'react-icons/fa';
import { logOutAction } from '../../store/reducer/users';
import { setPreloader } from '../../store/reducer/ui';
import RouterConfig from '../../const/RouterConfig';

function LogOut(props) {
  const navigate = useNavigate();
  const logOut = async () => {
    await props.dispatch(setPreloader(true));
    await props.dispatch(logOutAction());
    navigate(`/${RouterConfig.AUTH.path}`, { replace: true });
  };
  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`LogOut user`}
      variant="outline"
      color="current"
      _focus={{ shadow: 'none' }}
      onClick={logOut}
      icon={<FaSignOutAlt />}
    />
  );
}
export default connect(
  () => ({}),
  (dispatch) => ({ dispatch })
)(LogOut);
