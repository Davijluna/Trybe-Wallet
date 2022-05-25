import moeda from '../serviceApi/maneiAPI';

export const EMAIL = 'EMAIL'; // etiqueta que vai para o reducer.

export const addEmail = (email) => ({ // action que vai para o componete.
  type: EMAIL,
  email,
});

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
});
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const CURRENCE = 'CURRENCE';

export const addcurrence = (currences) => ({
  type: CURRENCE,
  payload: currences,
});

export const setExpense = (walletState) => async (dispatch) => {
  const requisicao = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await requisicao.json();
  const payload = { ...walletState, exchangeRates: { ...requestJson } };
  dispatch(addExpense(payload));
};

export const Thunk = () => async (dispatch) => {
  const response = await moeda();
  const mudancaApi = Object.keys(response);
  const array = mudancaApi.filter((moedas) => moedas !== 'USDT');
  dispatch(addcurrence(array));
};
