// %======================== const ========================% //

export const PREFIX = '';

export const BACKEND_URL = import.meta.env.VITE_API_PATH;
export const API_KEY = import.meta.env.VITE_API_KEY;
export const REQUEST_TIMEOUT = 5000;

export const APIRoute = {
  MAIN: '/'
};

// %------------------------ rendering ------------------------% //
export const AppRoute = {
  HOME: '/',
};

// %------------------------ routing ------------------------% //

export const PagesNames = {
  [AppRoute.HOME]: 'Главная',
};


export const ViewportWidth = {
  FULLHD: 1920,
  DESKTOP: 1440,
  TABLET: 834,
  MIDDLE: 577,
  MOBILE: 600,
};

export const MediaQuery = {
  DESKTOP: `(max-width: ${ViewportWidth.DESKTOP}px)`,
  TABLET: `(max-width: ${ViewportWidth.TABLET}px)`,
  MIDDLE: `(max-width: ${ViewportWidth.MIDDLE}px)`,
  MOBILE: `(max-width: ${ViewportWidth.MOBILE}px)`,
};

export const Ext = {
  PNG: '.png',
  WEBP: '.webp',
  SVG: '.svg',
  GIF: '.gif',
  JPEG: '.jpeg',
};

export const MediaPrefix = {
  FULL: '_full',
  DESK: '_desk',
  TAB: '_tab',
  MOB: '_mob',
};

export const LoadingStatus = {
  UNKNOWN: 'UNKNOWN',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

// %------------------------ store ------------------------% //
export const NameSpace = {
  PARTS: 'PARTS',
};

export const OpenElement = {
  MODAL_ELEMENT: 'MODAL_ELEMENT',
  ASIDE: 'ASIDE',
};