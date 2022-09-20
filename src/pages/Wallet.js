import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../redux/actions';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(fetchCurrency());
  }

  render() {
    const { loading } = this.props;
    return (
      loading ? <span>Loading...</span> : (
        <div>
          <Header />
          <WalletForm />
          <Table />
        </div>
      ));
  }
}

function mapStateToProps(state) {
  return ({
    loading: state.wallet.loading,
  });
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
