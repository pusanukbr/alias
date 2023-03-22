import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Image,
  Stack
} from '@chakra-ui/react';

export default function ModalLogo({ isOpen, closeModal, onClose }) {
  const [localAvatar, setLocalAvatar] = useState('');

  const TabsAvatar = React.memo(() => {
    return (
      <Tabs isLazy>
        <TabList>
          <Tab>Male</Tab>
          <Tab>Female</Tab>
          <Tab>Animals</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{renderAvatar('male')}</TabPanel>

          <TabPanel>{renderAvatar('female')}</TabPanel>

          <TabPanel>{renderAvatar('animals')}</TabPanel>
        </TabPanels>
      </Tabs>
    );
  });

  const renderAvatar = (type) => {
    return [...Array(10)].map((item, index) => {
      const nameUrl = `${type}/avatar-${index}.png`;
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

  return (
    <Modal onClose={onClose} isOpen={isOpen} size="2xl" motionPreset="scale">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack wrap="wrap" align="flex-start" direction="row" justify="center">
            <TabsAvatar />
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
}
