import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { decrement } from '../../redux/AC';
import './index.css';
import logo from '../../img/logo.svg';

class Header extends Component {
  state = {
    backBt: true,
  };

  static propTypes = {
    count: PropTypes.number,
    decrement: PropTypes.number
  };

  render() {
    const backButton = this.props.count >= 3 &&
      <Link onClick={this.handleBackToPatientSelectionPage} to="/patient-selection" className="header__back-bt">Вернуться к пациентам</Link>;

    return (
      <header className={this.props.count >= 2 ? "header header--active" : "header"}>
        <div className={this.props.count >= 2 ? "header-wrap header-wrap--active" : "header-wrap"}>
          <a href="/">
            <img className={this.props.count >= 2 ? "header-logo--active" : "header-logo"} src={logo} alt="logo" />
          </a>
          {backButton}
        </div>
      </header>
    );
  }

  handleBackToPatientSelectionPage = () => {
    const action = decrement();
    this.props.dispatch(action);
  }
}

const mapStateToProps = state => ({
  count: state.bgCounter
});

export default connect(mapStateToProps)(Header)
