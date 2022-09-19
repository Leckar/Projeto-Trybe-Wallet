// Coloque aqui suas actions
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';
export const LOGIN = 'LOGIN';

export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload) => ({ type: RESPONSE_API, payload });

export const saveCredentials = (payload) => ({ type: LOGIN, payload });
