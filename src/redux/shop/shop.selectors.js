import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) => {
    console.log(collections);
    console.log(collections[collectionUrlParam]);
    return collections[collectionUrlParam];
  });

// collections.find(
//(collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
// )
/*

      when we call .find on our array, we are using and passing the fn inside into
      every element from left to right. (imagine the worst case; last place)
      bad performance

      this is a flaw in storing data that we need to query individual element for inside of an array.

      instead what we can do is to store it in an object.

      we can find the actual property of our object by passing the collectionURlParam.

      this concept of storing list of elements inside of an object intead of an array:

      is data normalazation.

      changing our SHOP_DATA from [] to {}

      NOTICE WE CAN USE IT IN OUR COMPONENTS AND RENDERING NO CHANGE NEEDED WITH THIS SYNTAX

*/
