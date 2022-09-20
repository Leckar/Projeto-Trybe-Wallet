import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: '',
    method: 'money',
    tag: 'Food',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
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
            name="currencies"
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
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
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
            <option value="Food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work-related">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health-related">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return ({
    currencies: state.wallet.currencies,
  });
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
export default connect(mapStateToProps)(WalletForm);
