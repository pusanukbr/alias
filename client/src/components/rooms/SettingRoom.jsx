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
import i18next from 'i18next';

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
        <Text>{i18next.t('create.room.timeRound')}</Text>
        <Text>{timeRound || '0'}</Text>
      </Heading>

      <Slider
        id="slider"
        defaultValue={25}
        min={0}
        max={100}
        step={25}
        onChange={setTimeRound}
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
        <Text>{i18next.t('create.room.poinForWin')}</Text>
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

export default function SettingRoom() {
  return (
    <Container
      backgroundColor={useColorModeValue('white', 'gray.700')}
      maxW="auto"
      m="0"
      mr="10px"
      p="20px"
      borderRadius="20px">
      <Box mb={10}>
        <Heading>{i18next.t('create.room.title')}</Heading>
      </Box>

      <Box mb={10}>
        <Text mb="2">{i18next.t('create.room.dictionary')}</Text>
        <Select>
          <option value="hide">{i18next.t('create.room.dictionary_hige')}</option>
          <option value="classic">{i18next.t('create.room.dictionary_classic')}</option>
          <option value="low">{i18next.t('create.room.dictionary_low')}</option>
        </Select>
      </Box>
      <SliderRound />
      <SliderPoinToWin />
      <Box mb={10}>
        <Checkbox
          colorScheme="teal"
          w="100%"
          display="flex"
          justifyContent="space-between"
          flexDirection="row-reverse"
          defaultChecked>
          {i18next.t('create.room.fine')}
        </Checkbox>
      </Box>
      <Box mb={10}>
        <Checkbox
          w="100%"
          colorScheme="teal"
          display="flex"
          justifyContent="space-between"
          flexDirection="row-reverse">
          {i18next.t('create.room.lastWord')}
        </Checkbox>
      </Box>
      <Box>
        <Button>{i18next.t('create.room.startNewGame')}</Button>
      </Box>
    </Container>
  );
}
