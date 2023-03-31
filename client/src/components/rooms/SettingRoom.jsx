import React from 'react';
import { Container, Box, Button, useColorModeValue, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Form from '../form/Form';
import CustomCheckbox from '../form/CheckBox';
import CustomSlider from '../form/Slider';
import CustomSelect from '../form/Select';

const SettingRoom = () => {
  const { t } = useTranslation();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      backgroundColor={useColorModeValue('white', 'gray.700')}
      maxW="auto"
      m="0"
      mr="10px"
      p="20px"
      borderRadius="20px">
      <Box mb={10}>
        <Heading>{t('create.room.title')}</Heading>
      </Box>

      <Form onSubmit={onSubmit}>
        {/* Dictionary select */}
        <CustomSelect name="dictionary" label={t('create.room.dictionary')}>
          <option value="hide">{t('create.room.dictionary_hige', { words: 103 })}</option>
          <option value="classic">{t('create.room.dictionary_classic', { words: 245 })}</option>
          <option value="low">{t('create.room.dictionary_low', { words: 156 })}</option>
        </CustomSelect>

        {/* Slider Round */}
        <CustomSlider name="round" defaultValue={10} min={3} max={30} step={1} />

        {/* Slider Point */}
        <CustomSlider name="point" defaultValue={50} min={0} max={100} step={25} />

        {/* Checkbox Fine */}
        <CustomCheckbox name="fine" defaultChecked label={t('create.room.fine')} />

        {/* Checkbox Last word */}
        <CustomCheckbox name="lastWord" label={t('create.room.lastWord')} />

        <Box>
          <Button colorScheme="teal" type="submit">
            {t('create.room.startNewGame')}
          </Button>
        </Box>
      </Form>
    </Container>
  );
};

export default SettingRoom;
