import { createSelector, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/const';
import { getAnalogues, getParts } from '../api-actions/api-actions';

// %======================== partsSlice ========================% //

const initialState = {
  parts: [],
  analogues: null,
  isLoading: false,
  isPartsLoading: false,
  error: null,
  analoguesError: null,
  currentArticle: ''
};

export const partsSlice = createSlice({
  name: NameSpace.PARTS,
  initialState,
  reducers: {
    setCurrentArticle: (state, action) => {
      state.currentArticle = action.payload;
    },
    dropAnalogues: (state) => {
      state.analogues = null;
      console.log(1)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getParts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getParts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.parts = action.payload.goods || [];
      })
      .addCase(getParts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAnalogues.pending, (state) => {
        state.isPartsLoading = true;
      })
      .addCase(getAnalogues.fulfilled, (state, action) => {
        state.isPartsLoading = false;
        state.analogues = action.payload;
      })
      .addCase(getAnalogues.rejected, (state, action) => {
        state.isPartsLoading = false;
        state.analoguesError = action.error.message;
      });
  },
  selectors: {
    selectParts: (state) => state.parts,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectAnalogues: (state) => state.analogues,
    selectCurrentArticle: (state) => state.currentArticle
  },
});


export const { setCurrentArticle, dropAnalogues } = partsSlice.actions;
export const { selectParts, selectError, selectIsLoading, selectCurrentArticle, selectAnalogues } = partsSlice.selectors;

export const selectBrands = createSelector([selectParts], (parts) => {
  const brands = parts.map((part) => part.brand);
  const uniqueBrands = [...new Set(brands)];

  return uniqueBrands.filter((brand) => Boolean(brand));
});

export const selectProductAnalogues = createSelector([selectAnalogues], (data) => {
  const product = data?.goods?.[0];

  if (!product?.number || !Array.isArray(product.analogues)) return [];

  return product.analogues;
});

export const selectProduct = createSelector([selectAnalogues], (data) => {
  const product = data?.goods?.[0];

  if (!product?.number) return null;

  const { analogues, ...rest } = product;

  return rest;
});
