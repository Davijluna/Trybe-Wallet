import moeda from '../serviceApi/maneiAPI';

export const EMAIL = 'EMAIL'; // etiqueta que vai para o reducer.

export const addEmail = (email) => ({ // action que vai para o componete.
  type: EMAIL,
  payload: email,
});

export const CURRENCE = 'CURRENCE';

export const addcurrence = (currences) => ({
  type: CURRENCE,
  payload: currences,
});

export const Thunk = () => async (dispatch) => {
  const response = await moeda();
  const mudancaApi = Object.keys(response);
  const array = mudancaApi.filter((moedas) => moedas !== 'USDT');
  dispatch(addcurrence(array));
};
