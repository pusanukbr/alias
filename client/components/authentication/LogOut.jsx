import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaSignOutAlt } from 'react-icons/fa';

export default function LogOut() {
  const logOut = () => {
    console.log('logOut');
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
