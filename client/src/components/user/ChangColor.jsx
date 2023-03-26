import React, { useState } from 'react';
import { SliderPicker } from 'react-color';
import { Controller } from 'react-hook-form';
import { FormErrorMessage, FormControl, FormLabel } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function ChangColor({
  name,
  control,
  rules,
  label,
  userColor,
  formState: { errors }
}) {
  const [color, setColor] = useState(userColor);
  const { t } = useTranslation();
  const change = ({ event: { hex }, onChange }) => {
    setColor(hex);
    onChange(hex);
  };
  return (
    <FormControl mb="15px">
      <FormLabel htmlFor={name} fontWeight="bold">
        {label}
      </FormLabel>
      <FormControl isInvalid={errors[name]}>
        <Controller
          render={({ field }) => (
            <SliderPicker
              color={color || '#81e6d9'}
              onChange={(event) => change({ event, onChange: field.onChange })}
            />
          )}
          name={name}
          control={control}
          defaultValue={color}
          rules={rules}
        />
        <FormErrorMessage>
          {errors[name] && t(errors[name].message, { number: rules[errors[name].type].value })}
        </FormErrorMessage>
      </FormControl>
    </FormControl>
  );
}
