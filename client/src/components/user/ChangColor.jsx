import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { SliderPicker } from 'react-color';
import i18next from 'i18next';

export default function ChangColor() {
  const [color, setColor] = useState('#81e6d9');
  return (
    <Box mb="15px">
      <Text mb="2" fontWeight="bold">
        {i18next.t('create.user.color')}
      </Text>
      <SliderPicker color={color} onChange={setColor} />
    </Box>
  );
}
