import { combineReducers } from 'redux';
import { REQUEST_API, RESPONSE_API } from '../actions';
import user from './user';

// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const INITIAL_STATE = {
  loading: false,
};

function getMoney(state = INITIAL_STATE, action) {
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
    };
  default:
    return state;
  }
}

const rootReducer = combineReducers({ getMoney, user });

export default rootReducer;
