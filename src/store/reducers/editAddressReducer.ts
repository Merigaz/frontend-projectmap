import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  EditAddress  : [],
};

const EditAddressSlice = createSlice({
  name: 'EditAddress',
  initialState,
  reducers: {
    setEditAddress: (state, action) => {
      state.EditAddress = action.payload;
    },
  },
});

export const { setEditAddress } = EditAddressSlice.actions;

export default EditAddressSlice.reducer;