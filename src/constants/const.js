// %======================== const ========================% //

export const BACKEND_URL = import.meta.env.VITE_API_PATH;
export const API_KEY = import.meta.env.VITE_API_KEY;
export const REQUEST_TIMEOUT = 5000;
export const INITIAL_VISIBLE_ITEMS_QUANTITY = 10;

export const APIRoute = {
  MAIN: '/'
};

export const LoadingStatus = {
  UNKNOWN: 'UNKNOWN',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

export const NameSpace = {
  PARTS: 'PARTS',
};