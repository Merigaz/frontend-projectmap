import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Places: [],
};

const PlacesSlice = createSlice({
  name: 'Places',
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.Places = action.payload;
    },
  },
});

export const { setPlaces } = PlacesSlice.actions;

export default PlacesSlice.reducer;