import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  NameMarkers: [],
};

const NameMarkersSlice = createSlice({
  name: 'NameMarkers',
  initialState,
  reducers: {
    setNameMarkers: (state, action) => {
      state.NameMarkers = action.payload;
    },
  },
});

export const { setNameMarkers } = NameMarkersSlice.actions;

export default NameMarkersSlice.reducer;