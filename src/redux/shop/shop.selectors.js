import { createSelector } from "reselect";

const currentShopSelector = (state) => state.shop;

export const selectShopCollections = createSelector(
	[currentShopSelector],
	(shop) => shop.collections
);

export default selectShopCollections;
