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

export default function settingRoom() {
  const { t } = useTranslation();
  const [timeRound, setTimeRound] = useState(25);
  const [poinForWin, setPoinForWin] = useState();
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
      <Box mb={10}>
        <Text>{t('create.room.dictionary')}</Text>
        <Select>
          <option value="hide">{t('create.room.dictionary_hige')}</option>
          <option value="classic">{t('create.room.dictionary_classic')}</option>
          <option value="low">{t('create.room.dictionary_low')}</option>
        </Select>
      </Box>
      <Box mb={10}>
        <Heading fontSize="md" display="flex" flexDirection="row" justifyContent="space-between">
          <Text>{t('create.room.timeRound')}</Text>
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
      <Box mb={10}>
        <Heading fontSize="md" display="flex" flexDirection="row" justifyContent="space-between">
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
      <Box mb={10}>
        <Checkbox
          colorScheme="teal"
          w="100%"
          display="flex"
          justifyContent="space-between"
          flexDirection="row-reverse"
          defaultChecked>
          {t('create.room.fine')}
        </Checkbox>
      </Box>
      <Box mb={10}>
        <Checkbox
          w="100%"
          colorScheme="teal"
          display="flex"
          justifyContent="space-between"
          flexDirection="row-reverse">
          {t('create.room.lastWord')}
        </Checkbox>
      </Box>
      <Box>
        <Button>{t('create.room.startNewGame')}</Button>
      </Box>
    </Container>
  );
}
