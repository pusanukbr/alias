import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { SliderPicker } from 'react-color';
import i18next from 'i18next';
import { Controller } from 'react-hook-form';

export default function ChangColor({ name, control }) {
  const [color, setColor] = useState('#81e6d9');

  const change = ({ event: { hex }, onChange }) => {
    setColor(hex);
    onChange(hex);
  };
  return (
    <Box mb="15px">
      <Text mb="2" fontWeight="bold">
        {i18next.t('create.user.color')}
      </Text>
      <Controller
        render={({ field }) => (
          <SliderPicker
            {...field}
            color={color}
            onChange={(event) => change({ event, onChange: field.onChange })}
          />
        )}
        name={name}
        control={control}
        defaultValue={color}
      />
    </Box>
  );
}
