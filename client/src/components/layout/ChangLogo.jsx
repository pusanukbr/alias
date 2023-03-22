import React from 'react';
import { useColorModeValue, useDisclosure, Stack, Image, Flex } from '@chakra-ui/react';
import { changUserData } from '../../store/reducer/users';
import { connect } from 'react-redux';
import ModalLogo from './ModalLogo';

const ChangLogo = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filter = useColorModeValue('invert(0)', 'invert(1)');
  const { avatar } = props.user;

  const closeModal = async (localAvatar) => {
    if (localAvatar) await props.dispatch(changUserData({ avatar: localAvatar }));
    return onClose();
  };
  return (
    <>
      <Stack onClick={onOpen}>
        <Flex
          width="100px"
          height="100px"
          overflow="hidden"
          align="center"
          justify="center"
          backgroundColor="teal.400"
          borderRadius="20px"
          _hover={{ cursor: 'pointer' }}>
          <Image
            filter={!avatar && filter}
            width={avatar ? '100%' : '60%'}
            src={`${process.env.PUBLIC_URL}/avatar/${avatar || 'avatar.png'}`}
          />
        </Flex>
      </Stack>
      <ModalLogo onClose={onClose} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default connect(
  ({ user }) => ({ user }),
  (dispatch) => ({ dispatch })
)(ChangLogo);
