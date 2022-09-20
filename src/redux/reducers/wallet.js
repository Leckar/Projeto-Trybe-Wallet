// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES, REQUEST_API, RESPONSE_API } from '../actions';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
  expenses: [],
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
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}
