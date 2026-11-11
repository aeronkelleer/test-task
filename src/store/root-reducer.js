import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants/const';
import { partsSlice } from './slices/parts-slice';

// %======================== rootReducer ========================% //

export const rootReducer = combineReducers({
  [NameSpace.PARTS]: partsSlice.reducer,
});
