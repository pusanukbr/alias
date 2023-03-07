import React from 'react';
import {
  Container,
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Select,
  Tooltip,
  Checkbox,
  Button,
  useColorModeValue
} from '@chakra-ui/react';

export default function settingRoom() {
  return (
    <Container
      backgroundColor={useColorModeValue('white', 'gray.700')}
      maxW="auto"
      m="0"
      mr="10px"
      p="20px"
      borderRadius="20px">
      <Box mb={5}>
        <Text>Словарь</Text>
        <Select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box mb={5}>
        <Text>Длина раунда</Text>
        <Slider id="slider" defaultValue={0} min={0} max={100} step={25} colorScheme="teal">
          <SliderMark value={0} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            0%
          </SliderMark>
          <SliderMark value={25} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            25%
          </SliderMark>
          <SliderMark value={50} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            50%
          </SliderMark>
          <SliderMark value={75} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            75%
          </SliderMark>
          <SliderMark value={100} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            100%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip hasArrow color="white" placement="top">
            <SliderThumb />
          </Tooltip>
        </Slider>
      </Box>
      <Box mb={5}>
        <Text>Очки для победы</Text>
        <Slider id="slider" defaultValue={0} min={0} max={100} step={25} colorScheme="teal">
          <SliderMark value={0} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            0%
          </SliderMark>
          <SliderMark value={25} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            25%
          </SliderMark>
          <SliderMark value={50} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            50%
          </SliderMark>
          <SliderMark value={75} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            75%
          </SliderMark>
          <SliderMark value={100} mt="1" ml="-2.5" color="CaptionText" fontSize="sm">
            100%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip hasArrow color="white" placement="top">
            <SliderThumb />
          </Tooltip>
        </Slider>
      </Box>
      <Box mb={5}>
        <Text>Штрафы за пропуски</Text>
        <Checkbox colorScheme="teal" defaultChecked>
          Checkbox
        </Checkbox>
      </Box>
      <Box mb={5}>
        <Text>Последнее слово для всех</Text>
        <Checkbox colorScheme="teal">Checkbox</Checkbox>
      </Box>
      <Box>
        <Button>Start</Button>
      </Box>
    </Container>
  );
}
