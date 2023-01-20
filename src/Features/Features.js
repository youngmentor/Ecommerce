import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     products: [],
//     cart: [],
//     total: 0,
//     amount: 0,
// }

const Features = createSlice({
    name: "e-store",
    initialState: {
        products: [],
        cart: [],
        total: 0,
        amount: 0,
    },
    reducers: {
        collectProducts: (state, { payload }) => {
            state.products = payload;
        },
        addToCart: (state, { payload }) => {
            const check = state.cart.findIndex((i) => i.id === payload.id);
            if (check >= 0) {
                state.cart[check].QTY += 1;
            } else {
                const items = { ...payload, QTY: 1 };
                state.cart.push(items);
            }
        },
        removeItem: (state, { payload }) => {
            const remove = state.cart.filter((i) => i.id !== payload.id);
            state.cart = remove;
            let total = 0;
            let amount;
            state.cart.forEach((item) => {
                amount += item.QTY;
                total +=( item.QTY * item.price);
            });
            state.amount = amount;
            state.total = total;
        },
        clearCart: (state) => {
            state.cart = [];
            state.total = 0;
            state.amount = 0;
        },
        total: (state, { payload }) => {
            let amount = 0;
            let total = 0;
            state.cart.forEach((item) => {
                amount += item.QTY;
                total += Math.floor(item.QTY * item.price);
            });
            state.amount = amount;
            state.total = total;
        },
        minusItem: (state, { payload }) => {
            const checkCart = state.cart.findIndex((el) => el.id === payload.id);
            const check = state.cart[checkCart].QTY
            if (check > 1) {
                state.cart[checkCart].QTY -= 1
            } else if (check === 1) {
                const remove = state.cart.filter(el => el.id !== payload.id)
                state.cart = remove
            }
        },
    },
});

export const { collectProducts, addToCart, removeItem, clearCart, total, minusItem } = Features.actions

export default Features.reducer