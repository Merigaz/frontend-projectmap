import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  MarkersMap: [],
};

const MarkersMapSlice = createSlice({
  name: 'MarkersMap',
  initialState,
  reducers: {
    setMarkersMap: (state, action) => {
      state.MarkersMap = action.payload;
    },
  },
});

export const { setMarkersMap } = MarkersMapSlice.actions;

export default MarkersMapSlice.reducer;