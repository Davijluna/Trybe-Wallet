// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const GlobalWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCE:
    return {
      ...state, currencies: action.payload,
    };
  default:
    return state;
  }
};

export default GlobalWallet;
