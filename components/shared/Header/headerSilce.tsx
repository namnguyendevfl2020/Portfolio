import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
    titleSelected: string;
}

const initialState: HeaderState = {
    titleSelected: ""
}

const headerSlice = createSlice({
    name: "headerSlice",
    initialState,
    reducers: {
        headerTitleChanged(state,action) {
            state.titleSelected = action.payload;
        }
    }
})

export default headerSlice.reducer

export const { 
    headerTitleChanged
} = headerSlice.actions