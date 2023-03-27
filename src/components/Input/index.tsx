import React from 'react';
import { Input, InputContainer, Label } from './styles';
import { TNumberInput, TTextInput } from './types';

export const TextInput = ({ value, placeholder, onChange }: TTextInput) => {
  return (
    <InputContainer>
      <label>&nbsp;</label>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export const NumberInput = ({
  value,
  placeholder,
  label,
  onChange
}: TNumberInput) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};
