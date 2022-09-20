export const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export async function fetchAPI(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  delete json.USDT;
  return { ...json };
}
