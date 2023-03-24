import { ChangeEvent } from 'react';

export type TTextInput = {
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type TNumberInput = {
  value: number;
  placeholder?: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
