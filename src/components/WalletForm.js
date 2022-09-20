import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenses } from '../redux/actions';
import { ENDPOINT, fetchAPI } from '../services/fetchAPI';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  submitExpenses = async () => {
    const { expenses, dispatch } = this.props;
    const { value, description, currency,
      method, tag } = this.state;
    const newExpenseId = expenses.length;
    const exchangeTable = await fetchAPI(ENDPOINT);
    await dispatch(saveExpenses({
      id: newExpenseId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: exchangeTable,
    }));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="currency"
            selected={ currency }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies.map((e, ind) => (
              <option
                key={ ind }
                value={ `${e}` }
              >
                {e}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select
            id="metodo"
            name="method"
            selected={ method }
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            id="tag"
            name="tag"
            selected={ tag }
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.submitExpenses }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return ({
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
  });
}

// function mapDispatchToProps(dispatch) {
//   return {
//     saveExpenses: () => dispatch(saveExpenses()),
//   };
// }

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(WalletForm);
