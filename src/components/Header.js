import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;
    const total = expenses.reduce((accu, { value, currency, exchangeRates }) => {
      accu += +value * +exchangeRates[currency].ask;
      return accu;
    }, 0);
    return (
      <section>
        <div
          data-testid="email-field"
        >
          {`Olá, ${user}`}
        </div>
        <div data-testid="total-field">
          { total.toFixed(2) }
        </div>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return ({
    expenses: state.wallet.expenses,
    user: state.user.email,
  });
}

Header.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
