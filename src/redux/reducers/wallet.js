// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES, MODIFICATION, REQUEST_API,
  RESPONSE_API, TARGET_DATA } from '../actions';

const INITIAL_STATE = {
  loading: true,
  currencies: [],
  expenses: [],
  targetData: {},
  editMode: false,
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
  case MODIFICATION:
    return {
      ...state,
      expenses: action.payload,
      editMode: false,
    };
  case TARGET_DATA:
    return {
      ...state,
      targetData: action.payload,
      editMode: true,
    };
  default:
    return state;
  }
}
