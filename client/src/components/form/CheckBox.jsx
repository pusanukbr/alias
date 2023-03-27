import React from 'react';
import { FormErrorMessage, FormControl, FormLabel, Checkbox } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function CustomCheckbox({
  label,
  register,
  name,
  type,
  formState: { errors },
  rules = {},
  ...rest
}) {
  const { t } = useTranslation();
  return (
    <FormControl isInvalid={errors[name]}>
      <Checkbox id={name} {...register(name, rules)} {...rest}>
        {label}
      </Checkbox>
      <FormErrorMessage>
        {errors[name] && t(errors[name].message, { number: rules[errors[name].type].value })}
      </FormErrorMessage>
    </FormControl>
  );
}
