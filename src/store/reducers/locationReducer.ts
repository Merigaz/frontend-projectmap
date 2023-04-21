import {createSlice } from "@reduxjs/toolkit";
const initialState: any = []
const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocations: (state, action) => {
            state.locations.push(action.payload)
        },
    },
  });
  
  export const { addLocations } = locationSlice.actions;
  export default locationSlice.reducer;