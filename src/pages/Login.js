// import { toBeInTheDocument } from '@testing-library/jest-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
  }

  funcState = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validaButton = () => {
    const { email, senha } = this.state;
    const numero = 6;

    if (senha.length >= numero && this.validateEmail(email)) {
      return false;
    }
    return true;
  }

  click = () => {
    const { email } = this.state;
    const { salvarEmail, history } = this.props;
    console.log(typeof history);
    // console.log(typeof salvarEmail);
    salvarEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>

        <label htmlFor="name">
          Login:
          <input
            name="email"
            type="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.funcState }
          />

          <input
            name="senha"
            type="password"
            value={ senha }
            data-testid="password-input"
            onChange={ this.funcState }
          />

        </label>
        <button
          disabled={ this.validaButton() }
          onClick={ this.click }
          type="button"
        >
          Entrar

        </button>
      </div>);
  }
}
Login.propTypes = {
  salvarEmail: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  salvarEmail: (email) => dispatch(addEmail(email)),
});
export default connect(null, mapDispatchToProps)(Login); // fazendo conecção.
