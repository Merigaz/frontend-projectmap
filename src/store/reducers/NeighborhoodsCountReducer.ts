import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  NeighborhoodsCount: [],
};

const NeighborhoodsCountSlice = createSlice({
  name: 'NeighborhoodsCount',
  initialState,
  reducers: {
    setNeighborhoodsCount: (state, action) => {
      state.NeighborhoodsCount = action.payload;
    },
  },
});

export const { setNeighborhoodsCount } = NeighborhoodsCountSlice.actions;

export default NeighborhoodsCountSlice.reducer;