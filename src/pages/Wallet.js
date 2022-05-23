import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Thunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { moeda } = this.props;
    moeda();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div data-testid="email-field">
        TrybeWallet
        <p>{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="value">

            Valor:
            <input id="value" type="number" data-testid="value-input" />
          </label>
          <label htmlFor="descricao">
            Descrição da despesa:
            <input id="descricao" data-testid="description-input" />
          </label>
          <label htmlFor="selecao">
            Moeda:
            <select id="selecao">
              { currencies
                .map((currency) => (<option key={ currency }>{ currency }</option>)) }

            </select>
          </label>
          <label htmlFor="pagamento">
            Metodo de pagamento:
            <select id="pagamento" data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categorias">
            <select id="categorias" data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(Thunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
