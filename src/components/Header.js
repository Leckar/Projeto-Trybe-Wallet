import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <section>
        <div
          data-testid="email-field"
        >
          {`Olá, ${user}`}
        </div>
        <div data-testid="total-field">
          0
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
    user: state.user.email,
  });
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
