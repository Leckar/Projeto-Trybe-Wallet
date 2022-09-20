// Coloque aqui suas actions
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';
export const LOGIN = 'LOGIN';

export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload) => ({ type: RESPONSE_API, payload });

export const saveCredentials = (payload) => ({ type: LOGIN, payload });

export function fetchCurrency() {
  return async (dispatch) => {
    dispatch(requestApi());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    delete json.USDT;
    return dispatch(responseApi(json));
  };
}
