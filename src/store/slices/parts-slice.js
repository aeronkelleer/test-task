import { createSelector, createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../constants/const';
import { getAnalogues, getParts } from '../api-actions/api-actions';

// %======================== partsSlice ========================% //

const initialState = {
  parts: {
    data: [],
    status: LoadingStatus.UNKNOWN,
    error: null
  },
  analogues: {
    data: [],
    status: LoadingStatus.UNKNOWN,
    error: null,
  },
  currentArticle: '',
  currentBrand: '',
};

export const partsSlice = createSlice({
  name: NameSpace.PARTS,
  initialState,
  reducers: {
    setCurrentArticle: (state, action) => {
      state.currentArticle = action.payload;
    },
    setCurrentBrand: (state, action) => {
      state.currentBrand = action.payload;
    },
    dropParts: (state) => {
      state.parts = initialState.parts;
    },
    dropAnalogues: (state) => {
      state.analogues = initialState.analogues;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getParts.pending, (state) => {
        state.parts.status = LoadingStatus.LOADING;
      })
      .addCase(getParts.fulfilled, (state, action) => {
        state.parts.status = LoadingStatus.LOADED;
        state.parts.data = action.payload.goods || [];
      })
      .addCase(getParts.rejected, (state, action) => {
        state.parts.status = LoadingStatus.ERROR;
        state.parts.error = action.error.message;
      })
      .addCase(getAnalogues.pending, (state) => {
        state.analogues.status = LoadingStatus.LOADING;
      })
      .addCase(getAnalogues.fulfilled, (state, action) => {
        state.analogues.status = LoadingStatus.LOADED;
        state.analogues.data = action.payload;
      })
      .addCase(getAnalogues.rejected, (state, action) => {
        state.analogues.status = LoadingStatus.ERROR;
        state.analogues.error = action.error.message;
      });
  },
  selectors: {
    selectParts: (state) => state.parts.data,
    selectPartsStatus: (state) => state.parts.status,
    selectPartsError: (state) => state.parts.error,
    selectAnalogues: (state) => state.analogues.data,
    selectAnaloguesStatus: (state) => state.analogues.status,
    selectAnaloguesError: (state) => state.analogues.error,
    selectCurrentArticle: (state) => state.currentArticle,
    selectCurrentBrand: (state) => state.currentBrand
  },
});


export const { setCurrentArticle, dropParts, dropAnalogues, setCurrentBrand } = partsSlice.actions;
export const { selectParts, selectPartsError, selectPartsStatus, selectCurrentArticle, selectCurrentBrand, selectAnalogues, selectAnaloguesStatus, selectAnaloguesError } = partsSlice.selectors;

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
