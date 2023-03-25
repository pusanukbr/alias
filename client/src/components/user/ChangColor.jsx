import React, { useState } from 'react';
import { SliderPicker } from 'react-color';
import { Controller } from 'react-hook-form';
import { FormErrorMessage, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function ChangColor({ name, control, rules, label, formState: { errors } }) {
  const [color, setColor] = useState('#81e6d9');
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
              {...field}
              color={color}
              onChange={(event) => change({ event, onChange: field.onChange })}
            />
          )}
          name={name}
          control={control}
          defaultValue=""
          rules={rules}
        />
        <FormErrorMessage>
          {errors[name] && t(errors[name].message, { number: rules[errors[name].type].value })}
        </FormErrorMessage>
      </FormControl>
    </FormControl>
  );
}
