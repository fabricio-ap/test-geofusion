import { ChangeEvent } from 'react';

export type TInputChange = ChangeEvent<HTMLInputElement>;

export type TData = {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  revenue: number;
};
