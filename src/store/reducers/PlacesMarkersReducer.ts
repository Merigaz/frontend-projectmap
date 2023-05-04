import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PlacesMarkers: [],
};

const PlacesMarkersSlice = createSlice({
  name: 'PlacesMarkers',
  initialState,
  reducers: {
    setPlacesMarkers: (state, action) => {
      state.PlacesMarkers = action.payload;
    },
  },
});

export const { setPlacesMarkers } = PlacesMarkersSlice.actions;

export default PlacesMarkersSlice.reducer;