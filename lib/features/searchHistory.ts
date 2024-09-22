import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type SearchState = {
  value: string[];
};

const initialState: SearchState = {
  value: [],
};

export const searchSlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      //if you want to keep the search history to 5 items
      if (state.value.length === 5) {
        //remove the last item
        state.value.pop();
        //add the new item to the beginning of the array
        state.value.unshift(action.payload);
      } else {
        state.value.unshift(action.payload);
      }
    },
  },
});

export const { addToHistory } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.value;
export default searchSlice.reducer;
