import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image } from '@chakra-ui/react';

const TabsModal = React.memo(({ changAvatar, avatar }) => {
  const RenderAvatar = ({ type }) => {
    const [active, setActive] = useState('');

    const check = (url) => {
      changAvatar(url);
      setActive(url);
    };

    return [...Array(10)].map((item, index) => {
      const nameUrl = `${type}/avatar-${index}.png`;
      return (
        <Flex
          key={index}
          align="center"
          backgroundColor="teal.400"
          width="100px"
          height="100px"
          borderRadius="20px"
          overflow="hidden"
          borderStyle="solid"
          borderWidth="2px"
          borderColor={(active || avatar) === nameUrl ? 'white' : 'teal.400'}
          justify="center"
          _hover={{ cursor: 'pointer' }}>
          <Image
            width="100%"
            src={`${process.env.PUBLIC_URL}/avatar/${nameUrl}`}
            onClick={() => check(nameUrl)}
          />
        </Flex>
      );
    });
  };

  return (
    <Tabs isLazy isFitted>
      <TabList>
        <Tab>Male</Tab>
        <Tab>Female</Tab>
        <Tab>Animals</Tab>
      </TabList>
      <TabPanels>
        <TabPanel display="flex" flexWrap="wrap" rowGap="20px" justifyContent="space-between">
          <RenderAvatar type="male" />
        </TabPanel>

        <TabPanel display="flex" flexWrap="wrap" rowGap="20px" justifyContent="space-between">
          <RenderAvatar type="female" />
        </TabPanel>

        <TabPanel display="flex" flexWrap="wrap" rowGap="20px" justifyContent="space-between">
          <RenderAvatar type="animals" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
});

export default TabsModal;
