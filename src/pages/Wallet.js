import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Thunk, setExpense } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentaçâo',
    };
  }

  componentDidMount() {
    const { moeda } = this.props;
    moeda();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  funcSalvar = (event) => {
    const { addExpense, expenses } = this.props;
    event.preventDefault();
    const id = expenses.length;
    const idExpense = { id, ...this.state };
    addExpense(idExpense);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentaçâo',
    });
  }

  SomaDispesas = () => {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    const total = expenses.map(({ value, currency, exchangeRates }) => (
      Number(value) * Number(exchangeRates[currency].ask)
    ))
      .reduce((accumulator, curr) => accumulator + curr);
    return total.toFixed(2);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { email, currencies } = this.props;
    return (
      <div data-testid="email-field">
        TrybeWallet
        <p>{ email }</p>
        <p data-testid="total-field">{ this.SomaDispesas() }</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="value">

            Valor:
            <input
              id="value"
              type="number"
              data-testid="value-input"
              value={ value }
              name="value"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição da despesa:
            <input
              id="descricao"
              data-testid="description-input"
              value={ description }
              name="description"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="selecao">
            Moeda:
            <select
              id="selecao"
              value={ currency }
              name="currency"
              onChange={ this.handleChange }
            >
              { currencies
                .map((coin) => (<option key={ coin }>{ coin }</option>)) }

            </select>
          </label>
          <label htmlFor="pagamento">
            Metodo de pagamento:
            <select
              id="pagamento"
              value={ method }
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categorias">
            <select
              id="categorias"
              value={ tag }
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="submit" onClick={ this.funcSalvar }>Adicionar despesa</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>

      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(Thunk()),
  addExpense: (state) => dispatch(setExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
