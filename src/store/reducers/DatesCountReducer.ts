import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  DatesCount: [],
};

const DatesCountSlice = createSlice({
  name: 'DatesCount',
  initialState,
  reducers: {
    setDatesCount: (state, action) => {
      state.DatesCount = action.payload;
    },
  },
});

export const { setDatesCount } = DatesCountSlice.actions;

export default DatesCountSlice.reducer;