import React, { useState } from 'react';
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  Text
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';

export default function CustomSlider({
  label,
  register,
  name,
  type,
  formState: { errors },
  formState,
  rules = {},
  control,
  ...rest
}) {
  const { t } = useTranslation();
  const [timeRound, setTimeRound] = useState(25);
  const change = ({ value, onChange }) => {
    setTimeRound(value);
    onChange(value);
  };
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name} fontWeight="bold">
        <Text>{label}</Text>
        <Text>{timeRound || '0'}</Text>
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Slider {...rest} onChange={(value) => change({ value, onChange: onChange })}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip hasArrow color="white" placement="top">
              <SliderThumb />
            </Tooltip>
          </Slider>
        )}
      />

      <FormErrorMessage>
        {errors[name] && t(errors[name].message, { number: rules[errors[name].type].value })}
      </FormErrorMessage>
    </FormControl>
  );
}
