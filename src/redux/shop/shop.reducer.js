import { SHOP_DATA } from "./shopdata.js";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      console.log(state);
      return state;
  }
};
