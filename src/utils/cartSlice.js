import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removedItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length > 0 ? state.items = [] : []
            // state.items.length = 0
        }
    }
});

export const {addToCart,  removedItem, clearCart } = cartSlice.actions
export default cartSlice.reducer