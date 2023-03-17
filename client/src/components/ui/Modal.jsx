import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';

export default function CustomModal({
  children,
  closeButton = true,
  title = '',
  buttons,
  onClose,
  isOpen,
  closeOnOverlayClick = true
}) {
  return (
    <>
      <Modal
        closeOnOverlayClick={closeOnOverlayClick}
        isCentered
        onClose={() => onClose(false)}
        isOpen={isOpen}
        motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          {title && <ModalHeader>{title}</ModalHeader>}
          {closeButton && <ModalCloseButton />}
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {buttons &&
              buttons.length &&
              buttons.map((button) => {
                console.log('test button');
                return (
                  <Button colorScheme={button.scheme} mr={3} onClick={() => button.callback(false)}>
                    {button.text}
                  </Button>
                );
              })}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
