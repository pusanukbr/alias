import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const TabsModal = ({ changAvatar, avatar }) => {
  const { t } = useTranslation();
  const RenderAvatar = ({ type }) => {
    const [active, setActive] = useState('');

    const check = (newAvatar) => {
      changAvatar(newAvatar);
      setActive(newAvatar.url);
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
          borderColor={(active || avatar.url) === nameUrl ? 'white' : 'teal.400'}
          justify="center"
          _hover={{ cursor: 'pointer' }}>
          <Image
            width="100%"
            src={`${process.env.PUBLIC_URL}/avatar/${nameUrl}`}
            onClick={() => check({ url: nameUrl, type: type })}
          />
        </Flex>
      );
    });
  };

  const tabIndex = () => {
    if (avatar) {
      if (avatar.type === 'male') return 0;
      if (avatar.type === 'female') return 1;
      if (avatar.type === 'animals') return 2;
    }
    return 0;
  };

  return (
    <Tabs isLazy isFitted colorScheme="teal" defaultIndex={tabIndex}>
      <TabList>
        <Tab>{t('modal.type.male')}</Tab>
        <Tab>{t('modal.type.female')}</Tab>
        <Tab>{t('modal.type.animals')}</Tab>
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
};

export default TabsModal;
