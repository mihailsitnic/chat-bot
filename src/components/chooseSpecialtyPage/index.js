import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, gynecologistPath, fndocrinologistPath } from '../../redux/AC';
import './index.css';

class ChooseSpecialtyPage extends Component {
  static propTypes = {
    count: PropTypes.number,
    gynecologist: PropTypes.bool,
    endocrinologist: PropTypes.bool,
  };

  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div className="chooseSpecialtyPage">
            <h2 className="chooseSpecialtyPage__title">Выберите <br/> свою специальность</h2>

            <div className="chooseSpecialtyPage__buttons">
              <Link to="/diagnosis" className="chooseSpecialtyPage__link">
                <button onClick={this.handleGynecologist} className="chooseSpecialtyPage__bt">Гинеколог</button>
              </Link>
              <Link to="/diagnosis" className="chooseSpecialtyPage__link">
                <button onClick={this.handleEndocrinologist} className="chooseSpecialtyPage__bt">Эндокринолог</button>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  handleGynecologist = () => {
    const actionIncrement = increment();
    const actionGynecologistPath = gynecologistPath();
    this.props.dispatch(actionIncrement);
    this.props.dispatch(actionGynecologistPath);
  };

  handleEndocrinologist = () => {
    const actionIncrement = increment();
    const actionFndocrinologistPath = fndocrinologistPath();
    this.props.dispatch(actionIncrement);
    this.props.dispatch(actionFndocrinologistPath);
  };
}

const mapStateToProps = state => ({
  gynecologist: state.gynecologistPath,
  endocrinologist: state.fndocrinologistPath,
  count: state.bgCounter
});

export default connect(mapStateToProps)(ChooseSpecialtyPage);
