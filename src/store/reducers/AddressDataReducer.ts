import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  AddressData  : [],
};

const AddressDataSlice = createSlice({
  name: 'AddressData',
  initialState,
  reducers: {
    setAddressData: (state, action) => {
      state.AddressData = action.payload;
    },
  },
});

export const { setAddressData } = AddressDataSlice.actions;

export default AddressDataSlice.reducer;