import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  EditPlace  : [],
};

const EditPlaceSlice = createSlice({
  name: 'EditPlace',
  initialState,
  reducers: {
    setEditPlace: (state, action) => {
      state.EditPlace = action.payload;
    },
  },
});

export const { setEditPlace } = EditPlaceSlice.actions;

export default EditPlaceSlice.reducer;