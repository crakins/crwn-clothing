import { createSelector } from 'reselect';

// MEMOIZED or cached selectors 

// 2 types, input and output - both are required

// input selector
// a function that takes the whole state that only returns one piece of state

const selectCart = state => state.cart;

//output selector

export const selectCartsItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

// example of a selector for the cart item count in MapToProps in Cart-icon component

export const selectCartItemsCount = createSelector(
    [selectCartsItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
            0
        )
);