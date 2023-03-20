import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { SliderPicker } from 'react-color';

export default function ChangColor() {
  const [color, setColor] = useState('#81e6d9');
  return (
    <Box mb="15px">
      <Text>Color</Text>
      <SliderPicker color={color} onChange={setColor} />
    </Box>
  );
}
