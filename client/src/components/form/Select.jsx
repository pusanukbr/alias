import React from 'react';
import { FormErrorMessage, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function CustomSelect({
  label,
  register,
  name,
  type,
  formState: { errors },
  rules,
  children,
  ...rest
}) {
  const { t } = useTranslation();
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name} fontWeight="bold">
        {label}
      </FormLabel>
      <Select id={name} type={type} {...register(name, rules)} {...rest}>
        {children}
      </Select>
      <FormErrorMessage>
        {errors[name] && t(errors[name].message, { number: rules[errors[name].type].value })}
      </FormErrorMessage>
    </FormControl>
  );
}
