import React, { useState } from 'react';
import {
  Container,
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  Tooltip,
  Checkbox,
  Button,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Form from '../form/Form';
import CustomCheckbox from '../form/CheckBox';
import { Controller } from 'react-hook-form';
import { Rules } from '../../const/Validate';
import CustomSlider from '../form/Slider';

const SettingRoom = () => {
  const { t } = useTranslation();

  const Dictionary = () => {
    return (
      <Box mb={10}>
        <Text mb="2" fontWeight="bold">
          {t('create.room.dictionary')}
        </Text>
        <Select>
          <option value="hide">{t('create.room.dictionary_hige', { words: 103 })}</option>
          <option value="classic">{t('create.room.dictionary_classic', { words: 245 })}</option>
          <option value="low">{t('create.room.dictionary_low', { words: 156 })}</option>
        </Select>
      </Box>
    );
  };

  const SliderPoinToWin = () => {
    const [poinForWin, setPoinForWin] = useState();
    return (
      <Box mb={10}>
        <Heading
          fontSize="md"
          display="flex"
          flexDirection="row"
          mb="2"
          justifyContent="space-between">
          <Text>{t('create.room.poinForWin')}</Text>
          <Text>{poinForWin || '0'}</Text>
        </Heading>
        <Slider
          id="slider"
          defaultValue={0}
          min={0}
          max={100}
          step={25}
          onChange={setPoinForWin}
          colorScheme="teal">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip hasArrow color="white" placement="top">
            <SliderThumb />
          </Tooltip>
        </Slider>
      </Box>
    );
  };

  const SliderRound = () => {
    const [timeRound, setTimeRound] = useState(25);
    return (
      <Box mb={10}>
        <Heading
          fontSize="md"
          display="flex"
          flexDirection="row"
          mb="2"
          justifyContent="space-between">
          <Text>{t('create.room.timeRound')}</Text>
          <Text>{timeRound || '0'}</Text>
        </Heading>

        <Slider id="slider" onChange={setTimeRound} colorScheme="teal">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip hasArrow color="white" placement="top">
            <SliderThumb />
          </Tooltip>
        </Slider>
      </Box>
    );
  };

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
        {/* <Dictionary /> */}

        {/* Slider Round */}
        <CustomSlider name="round" defaultValue={25} min={0} max={100} step={25} />

        {/* Slider Point */}
        {/* <SliderPoinToWin /> */}

        {/* Checkbox Fine */}
        {/* <Fine /> */}
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
