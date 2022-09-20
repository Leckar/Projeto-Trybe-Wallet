import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpenses, saveTargetData } from '../redux/actions';

class Table extends Component {
  valueConverter = (value, rate) => (+value * +rate).toFixed(2);

  parser = (value) => parseFloat(value).toFixed(2);

  handleDelete = ({ target }) => {
    const { dispatch, expenses } = this.props;
    const newList = expenses.filter(({ id }) => id !== +target.id);
    dispatch(editExpenses(newList));
  };

  handleEdit = ({ target }) => {
    const { dispatch, expenses } = this.props;
    const selected = expenses[+target.id];
    dispatch(saveTargetData(selected));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
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
          <tbody>
            { expenses.map((e) => {
              const { currency, exchangeRates, value } = e;
              const { name, ask } = exchangeRates[currency];
              return (
                <tr key={ e.id }>
                  <td>{ e.description }</td>
                  <td>{ e.tag }</td>
                  <td>{ e.method }</td>
                  <td>{ this.parser(value) }</td>
                  <td>{ name }</td>
                  <td>{ this.parser(ask) }</td>
                  <td>{ this.valueConverter(value, ask) }</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      id={ e.id }
                      data-testid="edit-btn"
                      onClick={ this.handleEdit }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      id={ e.id }
                      data-testid="delete-btn"
                      onClick={ this.handleDelete }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return ({
    expenses: state.wallet.expenses,
  });
}
Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
export default connect(mapStateToProps)(Table);
