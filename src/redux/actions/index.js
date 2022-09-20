import { ENDPOINT, fetchAPI } from '../../services/fetchAPI';

// Coloque aqui suas actions
export const EXPENSES = 'EXPENSES';
export const EXCLUSION = 'EXCLUSION';
export const LOGIN = 'LOGIN';
export const MODIFICATION = 'MODIFICATION';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';
export const TARGET_DATA = 'TARGET_DATA';

export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload) => ({ type: RESPONSE_API, payload });
export const saveCredentials = (payload) => ({ type: LOGIN, payload });
export const saveExpenses = (payload) => ({ type: EXPENSES, payload });
export const editExpenses = (payload) => ({ type: MODIFICATION, payload });
export const saveTargetData = (payload) => ({ type: TARGET_DATA, payload });

export function fetchCurrency() {
  return async (dispatch) => {
    dispatch(requestApi());
    const json = await fetchAPI(ENDPOINT);
    return dispatch(responseApi(json));
  };
}
