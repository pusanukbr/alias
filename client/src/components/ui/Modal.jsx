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
  closeOnOverlayClick = true,
  size
}) {
  console.log('test ======> ');
  return (
    <>
      <Modal
        closeOnOverlayClick={closeOnOverlayClick}
        isCentered
        onClose={() => onClose(false)}
        isOpen={isOpen}
        size={size || 'md'}
        motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          {title && <ModalHeader>{title}</ModalHeader>}
          {closeButton && <ModalCloseButton />}
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {buttons &&
              buttons.length &&
              buttons.map((button, index) => {
                return (
                  <Button
                    key={index}
                    colorScheme={button.scheme}
                    mr={3}
                    onClick={() => button.callback()}>
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
