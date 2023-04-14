import { createSlice } from "@reduxjs/toolkit";

const initialState: any = []

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action) => {
            const index = state.length
            const newData = { ...action.payload, index };
            state.push(newData);
        },
        editData: (state, action) => {
            const indexData = state.findIndex((val: any) => val.id === action.payload.id)
            state[indexData] = action.payload
        },
        deleteData: (state, action) => {
            const dataFound = state.find((val:any) => val.id === action.payload)
            if (dataFound) {
                state.splice(state.indexOf(dataFound),1)
            }
        }
    }
})
export const { addData, editData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;