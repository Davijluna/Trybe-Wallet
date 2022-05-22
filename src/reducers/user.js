import { EMAIL } from '../actions';

const INICIAL_STATE = {
  email: '',
  senha: '',
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
