// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case NOME_DO_EVENTO:
  //   return {
  //     ...state,
  //     chaveExemplo: action.playload.algumValor,
  //   };
  default:
    return state;
  }
};

export default wallet;
