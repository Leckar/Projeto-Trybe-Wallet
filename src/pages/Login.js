import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, saveCredentials } from '../redux/actions';

class Login extends React.Component {
  state = {
    login: '',
    pwd: '',
    loginIsValid: false,
    isDisabled: true,
  };

  regexCheck = (address) => /\S+@\S+\.\S+/.test(address);

  validityCheck = (target) => {
    const { loginIsValid, pwd } = this.state;
    const pwdValidLength = 6;
    if (target.name === 'login') {
      this.setState({
        loginIsValid: this.regexCheck(target.value),
      });
    }
    if (pwd.length >= pwdValidLength && loginIsValid) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  };

  eventHandler = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    }, () => this.validityCheck(target));
  };

  loginHandler = async () => {
    const { login } = this.state;
    const { dispatch, history } = this.props;
    dispatch(saveCredentials(login));
    await dispatch(fetchCurrency());
    history.push('/carteira');
  };

  render() {
    const { isDisabled, login, pwd } = this.state;
    return (
      <div>
        <input
          type="text"
          name="login"
          value={ login }
          data-testid="email-input"
          onChange={ this.eventHandler }
        />
        <input
          type="password"
          name="pwd"
          value={ pwd }
          data-testid="password-input"
          onChange={ this.eventHandler }
        />
        <button
          type="submit"
          disabled={ isDisabled }
          onClick={ this.loginHandler }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
