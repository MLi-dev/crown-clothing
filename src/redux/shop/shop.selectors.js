import { createSelector } from "reselect";

import memoize from "lodash.memoize";

const currentShopSelector = (state) => state.shop;

export const selectShopCollections = memoize(
	createSelector([currentShopSelector], (shop) => shop.collections)
);

export const selectCollectionsForPreview = createSelector(
	[selectShopCollections],

	(collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
	createSelector(
		[selectShopCollections],
		(collections) => collections[collectionUrlParam]
	);
