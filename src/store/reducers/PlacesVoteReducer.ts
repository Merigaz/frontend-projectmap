import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PlacesVote  : [],
};

const PlacesVoteSlice = createSlice({
  name: 'PlacesVote',
  initialState,
  reducers: {
    setPlacesVote: (state, action) => {
      state.PlacesVote = action.payload;
    },
  },
});

export const { setPlacesVote } = PlacesVoteSlice.actions;

export default PlacesVoteSlice.reducer;