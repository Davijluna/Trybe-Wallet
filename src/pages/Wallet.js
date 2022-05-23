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
    const { email } = this.props;
    return (
      <div data-testid="email-field">
        TrybeWallet
        <p>{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(Thunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
