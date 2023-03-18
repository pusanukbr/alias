import React from 'react';
import CustomModal from '../ui/Modal';
import { useColorModeValue, useDisclosure, Stack, Image, Avatar } from '@chakra-ui/react';
export default function ChangLogo({ avatar }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filterImg = useColorModeValue('invert(0)', 'invert(1)');
  return (
    <>
      <Stack onClick={onOpen}>
        <Avatar
          backgroundColor="teal.400"
          borderWidth="2px"
          borderColor="teal.400"
          icon={
            <Image
              width="60%"
              filter={!avatar && filterImg}
              src={avatar || `${process.env.PUBLIC_URL}/avatar/avatar.png`}
            />
          }
          size="xl"
        />
      </Stack>
      <CustomModal
        onClose={onClose}
        isOpen={isOpen}
        title="TRALALA"
        size="2xl"
        buttons={[{ callback: onClose, scheme: 'blue', text: 'Change' }]}>
        <Stack wrap="wrap" align="center" direction="row" justify="center">
          {[...Array(10)].map((item, index) => {
            console.log(`${process.env.PUBLIC_URL}/avatar/avatar-${index}.svg`);
            return (
              <Avatar
                key={index}
                backgroundColor="teal.400"
                borderWidth="2px"
                borderColor="teal.400"
                src={`${process.env.PUBLIC_URL}/avatar/avatar-${index}.svg`}
                size="xl"
              />
            );
          })}
        </Stack>
      </CustomModal>
    </>
  );
}
