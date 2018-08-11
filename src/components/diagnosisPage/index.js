import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../../redux/AC';
import { Link } from "react-router-dom";
import './index.css';

class DiagnosisPage extends Component {
  static propTypes = {
    count: PropTypes.number,
    gynecologist: PropTypes.bool,
  };
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div className="wrap-flex">
            <section className="diagnosisPage">
              <h2 className="diagnosisPage__title">
                {this.props.gynecologist ? "Гиперпролактинемия" : ""}
                {this.props.fndocrinologist ? "Гиперпролактинемия" : ""}

              </h2>
              <div className="diagnosisPage__description">
                <p className="diagnosisPage__txt">
                  {this.props.gynecologist ? "Гинекологи нередко сталкиваются в своей практике с состоянием гиперпролактинемии." : ""}
                  {this.props.fndocrinologist ? "Гинекологи нередко сталкиваются в своей практике с состоянием гиперпролактинемии." : ""}
                </p>
                <p className="diagnosisPage__txt">
                  {this.props.gynecologist ? "Согласно данным разных авторов распространенность патологической гиперпролактинемии составляет от 10 до 30 случаев на 100 тысяч человек, встречается у 5% женщин репродуктивного возраста" : ""}
                  {this.props.fndocrinologist ? "Согласно данным разных авторов распространенность патологической гиперпролактинемии составляет от 10 до 30 случаев на 100 тысяч человек, встречается у 5% женщин репродуктивного возраста" : ""}
                  <a href="#footer" className="diagnosisPage__link">
                    <sup className="diagnosisPage__txt-sup">1</sup>
                  </a>.
                </p>
                <div className="diagnosisPage__txt-br" />
                <p className="diagnosisPage__txt">
                  {this.props.gynecologist ? "Приглашаем Вас принять участие в клиническом квесте, который поможет систематизировать современные знания \n о диагностической и лечебной тактике при данном состоянии." : ""}
                  {this.props.fndocrinologist ? "Приглашаем Вас принять участие в клиническом квесте, который поможет систематизировать современные знания \n о диагностической и лечебной тактике при данном состоянии." : ""}
                </p>
              </div>
              <Link to="/patient-selection" className="diagnosisPage__link">
                <button onClick={this.handleIncrement} className="diagnosisPage__bt">Начать тест</button>
              </Link>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }

  handleIncrement = () => {
    const actionIncrement = increment();
    this.props.dispatch(actionIncrement)
  }
}

const mapStateToProps = state => ({
  count: state.bgCounter,
  gynecologist: state.gynecologistPath,
  fndocrinologist: state.fndocrinologistPath,
});

export default connect(mapStateToProps)(DiagnosisPage);
