import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type SearchState = {
  value: string[];
};

const initialState: SearchState = {
  value: [],
};

export const historySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      if (state.value.includes(action.payload)) {
        return;
      }
      if (action.payload === '') return;
      //if you want to keep the search history to 5 items
      //add the new item to the beginning of the array
      state.value.unshift(action.payload);
      //if the search history exceeds 5 items, remove the last item
      if (state.value.length > 5) {
        state.value.pop();
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;
export const selectSearch = (state: RootState) => state.search.value;
export default historySlice.reducer;
