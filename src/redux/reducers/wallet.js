// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, RESPONSE_API } from '../actions';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,

    };
  case RESPONSE_API:
    return {
      ...state,
      loading: false,
      currencies: Object.keys(action.payload),
    };
  default:
    return state;
  }
}
