import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, patientSelectCard } from '../../redux/AC';
import { Link } from "react-router-dom";
import PatientTabletSlider from '../../components/slider-tablet';
import { MARINA_30, ОЛЬГА_35, ГАЛИНА_47, КАРИНА_26, ТАТЬЯНА_29 } from '../../constants';
import './index.css';
import user1 from '../../../src/img/users/user-1.png';
import user2 from '../../../src/img/users/user-2.png';
import user3 from '../../../src/img/users/user-3.png';
import user4 from '../../../src/img/users/user-4.png';

class PatientSelectionPage extends Component {
  state = {
    captionId: "",
  };

  static propTypes = {
    count: PropTypes.number
  };

  render() {
    const endocrinologistCards = this.props.gynecologist &&
      <Fragment>
        <li className="patientSelectionPage__li col-3">
          <Link
            to="/chat"
            onClick={() => this.handleSelectedPatient(MARINA_30)}
            className="patientSelectionPage__link">
            <div
              className={`patientSelectionPage-card ${this.state.captionId === MARINA_30 ? "patientSelectionPage-card--active" : ""}`}>
              <img src={user1} alt="user 1" className="patientSelectionPage-card__img"/>
              <div className="patientSelectionPage-card__description">
                <h4 className="patientSelectionPage-card__title">Марина, 30 лет</h4>
                <p className="patientSelectionPage-card__txt">не может забеременеть</p>
              </div>
            </div>
          </Link>
        </li>
        <li className="patientSelectionPage__li col-3">
          <Link
            to="/chat"
            onClick={() => this.handleSelectedPatient(ОЛЬГА_35)}
            className="patientSelectionPage__link">
            <div
              className={`patientSelectionPage-card ${this.state.captionId === ОЛЬГА_35 ? "patientSelectionPage-card--active" : ""}`}>
              <img src={user2} alt="user 2" className="patientSelectionPage-card__img"/>
              <div className="patientSelectionPage-card__description">
                <h4 className="patientSelectionPage-card__title">Ольга, 35 лет</h4>
                <p className="patientSelectionPage-card__txt">боли внизу живота, боли
                  в молочных железах</p>
              </div>
            </div>
          </Link>
        </li>
        <li className="patientSelectionPage__li col-3">
          <Link
            to="/chat"
            onClick={() => this.handleSelectedPatient(ГАЛИНА_47)}
            className="patientSelectionPage__link">
            <div
              className={`patientSelectionPage-card ${this.state.captionId === ГАЛИНА_47 ? "patientSelectionPage-card--active" : ""}`}>
              <img src={user3} alt="user 3" className="patientSelectionPage-card__img"/>
              <div className="patientSelectionPage-card__description">
                <h4 className="patientSelectionPage-card__title">Галина, 47 лет</h4>
                <p className="patientSelectionPage-card__txt">тяжело протекающий климакс</p>
              </div>
            </div>
          </Link>
        </li>
        <li className="patientSelectionPage__li col-3">
          <Link
            to="/chat"
            onClick={() => this.handleSelectedPatient(КАРИНА_26)}
            className="patientSelectionPage__link">
            <div
              className={`patientSelectionPage-card ${this.state.captionId === КАРИНА_26 ? "patientSelectionPage-card--active" : ""}`}>
              <img src={user4} alt="user 4" className="patientSelectionPage-card__img"/>
              <div className="patientSelectionPage-card__description">
                <h4 className="patientSelectionPage-card__title">Карина, 26 лет</h4>
                <p className="patientSelectionPage-card__txt">прекратились менструации</p>
              </div>
            </div>
          </Link>
        </li>
      </Fragment>;

    const gynecologistCards = this.props.endocrinologist &&
      <Fragment>
        <li className="patientSelectionPage__li col-3">
          <Link
            to="/chat"
            onClick={() => this.handleSelectedPatient(MARINA_30)}
            className="patientSelectionPage__link">
            <div
              className={`patientSelectionPage-card ${this.state.captionId === MARINA_30 ? "patientSelectionPage-card--active" : ""}`}>
              <img src={user1} alt="user 1" className="patientSelectionPage-card__img"/>
              <div className="patientSelectionPage-card__description">
                <h4 className="patientSelectionPage-card__title">Марина, 30 лет</h4>
                <p className="patientSelectionPage-card__txt">не может забеременеть</p>
              </div>
            </div>
          </Link>
        </li>
        <li className="patientSelectionPage__li col-3">
          <Link
            to="/chat"
            onClick={() => this.handleSelectedPatient(ТАТЬЯНА_29)}
            className="patientSelectionPage__link">
            <div
              className={`patientSelectionPage-card ${this.state.captionId === ТАТЬЯНА_29 ? "patientSelectionPage-card--active" : ""}`}>
              <img src={user3} alt="user 2" className="patientSelectionPage-card__img"/>
              <div className="patientSelectionPage-card__description">
                <h4 className="patientSelectionPage-card__title">Ольга, 35 лет</h4>
                <p className="patientSelectionPage-card__txt">боли внизу живота, боли
                  в молочных железах</p>
              </div>
            </div>
          </Link>
        </li>
      </Fragment>;

    return (
      <Fragment>
        <div className="wrapper">
          <section className="patientSelectionPage">
            <h3 className="patientSelectionPage__title">Выберите пациента<sup>*</sup></h3>
            <ul className="patientSelectionPage__list row">
              {gynecologistCards}
              {endocrinologistCards}
            </ul>
            <div className="patient-tablet-slider">
              <PatientTabletSlider />
            </div>
            <p className="patientSelectionPage__info"><sup>*</sup> Все портреты пациентов вымышленные, любые совпадения случайны</p>
          </section>
        </div>
      </Fragment>
    );
  }

  setCaption = id => this.setState({
    captionId: id
  });

  handleSelectedPatient = (captionId) => {
    const actionIncrement = increment();
    const actionPatientSelectCard = patientSelectCard(captionId);
    this.props.dispatch(actionIncrement);
    this.props.dispatch(actionPatientSelectCard)
  };
}

const mapStateToProps = state => ({
  gynecologist: state.gynecologistPath,
  endocrinologist: state.fndocrinologistPath,
  count: state.bgCounter
});

export default connect(mapStateToProps)(PatientSelectionPage);
