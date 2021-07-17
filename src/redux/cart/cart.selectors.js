import { createSelector } from "reselect";

// 2 types of selector

/*
 input selector that doesnt use createSelector
   output selector that does use input selector and createSelector to build themselves
   input selector => all it is a function that get this name convention selectX
   this is a function that gets the whole state and just returns a slice of it. one layer deep usually.
   (from whole reducer state we just want this peice of it the cart)
 the reason it is called input selector is that next selector we write is going to use this selector.
*/

/*
   cartItems which is a property on our cart
   createSelector takes 2 arguments: collection(array) of input selectors.
   second is the function that will return the value we want out of the selector.
   its parameters is actually each output of input selectors in the array in order that those selectors were written
   because we use createSelector to make this selectCartItems selector it is now a memoized selector.
*/

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
);

// now pull that into the cartIcon and use it.
