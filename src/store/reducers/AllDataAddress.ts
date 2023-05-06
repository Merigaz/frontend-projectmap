import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  AllDataAddress  : [],
};

const AllDataAddressSlice = createSlice({
  name: 'AllDataAddress',
  initialState,
  reducers: {
    setAllDataAddress: (state, action) => {
      state.AllDataAddress = action.payload;
    },
  },
});

export const { setAllDataAddress } = AllDataAddressSlice.actions;

export default AllDataAddressSlice.reducer;