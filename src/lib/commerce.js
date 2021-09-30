import Commerce from '@chec/commerce.js';

// Exporting our product from an api, commerce allows us not to have a backend api w/routes. Instead they are stored in an instance 
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);