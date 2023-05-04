import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PlacesName: [],
};

const PlacesNameSlice = createSlice({
  name: 'PlacesName',
  initialState,
  reducers: {
    setPlacesName: (state, action) => {
      state.PlacesName = action.payload;
    },
  },
});

export const { setPlacesName } = PlacesNameSlice.actions;

export default PlacesNameSlice.reducer;