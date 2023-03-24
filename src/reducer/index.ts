import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/data/data.json';
import { sliceArray } from '../utils';

export interface CounterState {
  defaultData: {
    name: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    revenue: number;
  }[];
  markers: {
    name: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    revenue: number;
  }[];
  data: {
    name: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    revenue: number;
  }[][];
  filter: {
    search: string;
    balance: number;
  };
}

const initialState: CounterState = {
  defaultData: data.stores,
  markers: data.stores,
  data: sliceArray(data.stores, 10),
  filter: {
    search: '',
    balance: 15000,
  },
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload;
    },
    changeMarkers: (state, action) => {
      state.markers = action.payload;
    },
    changeSearch: (state, action) => {
      state.filter.search = action.payload;
    },
    changeBalance: (state, action) => {
      state.filter.balance = action.payload;
    },
  },
});

export const { changeSearch, changeBalance, changeData, changeMarkers } = dataSlice.actions;

export default dataSlice.reducer;
