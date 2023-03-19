import React, { useState } from 'react';
import {
  useColorModeValue,
  useDisclosure,
  Stack,
  Image,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';
import { changUserData } from '../../store/reducer/users';
import { connect } from 'react-redux';

const ChangLogo = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [localAvatar, setLocalAvatar] = useState('');
  const { avatar } = props.user;
  const renderAvatar = () => {
    console.log('test');
    return [...Array(10)].map((item, index) => {
      const nameUrl = `avatar-${index}.png`;
      return (
        <Image
          key={index}
          backgroundColor="teal.400"
          width="100px"
          borderStyle="solid"
          borderWidth="2px"
          borderColor={localAvatar === nameUrl ? 'white' : 'teal.400'}
          borderRadius="20px"
          mb={5}
          src={`${process.env.PUBLIC_URL}/avatar/${nameUrl}`}
          size="xl"
          onClick={() => setLocalAvatar(nameUrl)}
        />
      );
    });
  };

  const closeModal = async () => {
    await props.dispatch(changUserData({ avatar: localAvatar }));
    return onClose();
  };
  console.log(avatar);
  return (
    <>
      <Stack onClick={onOpen}>
        <Image
          width="100px"
          backgroundColor="teal.400"
          borderRadius="20px"
          src={`${process.env.PUBLIC_URL}/avatar/${avatar || 'avatar.png'}`}
          size="xl"
        />
      </Stack>
      <Modal onClose={onClose} isOpen={isOpen} size="2xl" motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Avatar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack wrap="wrap" align="flex-start" direction="row" justify="center">
              {renderAvatar()}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Chang
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default connect(
  ({ user }) => ({ user }),
  (dispatch) => ({ dispatch })
)(ChangLogo);
