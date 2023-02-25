import React from 'react';
import { FormErrorMessage, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function CustomInput({
  label,
  register,
  name,
  type,
  formState: { errors },
  rules,
  ...rest
}) {
  const { t } = useTranslation();
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} type={type} {...register(name, rules)} {...rest} />
      <FormErrorMessage>
        {errors[name] && t(errors[name].message, { number: rules[errors[name].type].value })}
      </FormErrorMessage>
    </FormControl>
  );
}
