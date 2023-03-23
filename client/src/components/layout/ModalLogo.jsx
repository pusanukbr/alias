import React, { useCallback, useState } from 'react';
import TabsModal from './TabsModal';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack
} from '@chakra-ui/react';

const ModalLogo = ({ isOpen, closeModal, onClose, avatar }) => {
  const [localAvatar, setLocalAvatar] = useState('');

  const changLocalAvatar = useCallback((newAvatar) => {
    setLocalAvatar(newAvatar);
  }, []);

  return (
    <Modal onClose={onClose} isOpen={isOpen} size="2xl" motionPreset="scale">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <TabsModal changAvatar={changLocalAvatar} avatar={avatar} />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => closeModal(localAvatar)}>
            Сhange
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalLogo;
