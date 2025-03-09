import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemList: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action){
            state.itemList.push(action.payload)
        }
    }
})

export const {addItems} = cartSlice.actions;
export default cartSlice.reducer;