import React, { useState } from 'react';
import {
  useColorModeValue,
  useDisclosure,
  Stack,
  Image,
  Flex,
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
  const filter = useColorModeValue('invert(0)', 'invert(1)');
  const { avatar } = props.user;
  const renderAvatar = () => {
    return [...Array(10)].map((item, index) => {
      const nameUrl = `avatar-${index}.png`;
      return (
        <Flex
          key={index}
          align="center"
          backgroundColor="teal.400"
          width="100px"
          height="100px"
          mb={5}
          borderRadius="20px"
          overflow="hidden"
          borderStyle="solid"
          borderWidth="2px"
          borderColor={localAvatar === nameUrl ? 'white' : 'teal.400'}
          justify="center"
          _hover={{ cursor: 'pointer' }}>
          <Image
            width="100%"
            src={`${process.env.PUBLIC_URL}/avatar/${nameUrl}`}
            onClick={() => setLocalAvatar(nameUrl)}
          />
        </Flex>
      );
    });
  };

  const closeModal = async () => {
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
