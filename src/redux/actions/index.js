import { ENDPOINT, fetchAPI } from '../../services/fetchAPI';

// Coloque aqui suas actions
export const EXPENSES = 'EXPENSES';
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';

export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload) => ({ type: RESPONSE_API, payload });
export const saveCredentials = (payload) => ({ type: LOGIN, payload });
export const saveExpenses = (payload) => ({ type: EXPENSES, payload });

export function fetchCurrency() {
  return async (dispatch) => {
    dispatch(requestApi());
    const json = await fetchAPI(ENDPOINT);
    return dispatch(responseApi(json));
  };
}
