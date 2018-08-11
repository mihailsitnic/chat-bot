import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { patientSelectCard, increment } from '../../redux/AC';
import { MARINA_30, ОЛЬГА_35, ГАЛИНА_47, КАРИНА_26 } from '../../constants'
import "./index.css";
import user1 from '../../../src/img/users/user-1.png';
import user2 from '../../../src/img/users/user-2.png';
import user3 from '../../../src/img/users/user-3.png';
import user4 from '../../../src/img/users/user-4.png';

class PatientTabletSlider extends Component {
  state = {
    captionId: "",
  };

  setCaption = id => this.setState({ captionId: id });

  render() {

    const width = document.body.clientWidth;

    const { captionId } = this.state;

    const settings = {
      dots: width <= 320 ? true : false,
      infinite: true,
      speed: 500,
      slidesToShow: width <= 320 ? 1 : 2.5,
      slidesToScroll: 1,
      nextArrow: false,
      prevArrow: false,
    };

    return (
      <Slider {...settings}>

        <div className="slider-slide">
          <Link className="slider-slide__link" to="/chat" onClick={() => this.handleSelectedPatient(MARINA_30)}>
            <div className={`slider-card ${captionId === MARINA_30 ? 'slider-card--active' : ''}`}>
              <img className="slider-card__img" src={user1} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Марина, 30 лет</h4>
                <p className="slider-card__txt">не может забеременеть</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="slider-slide">
          <Link className="slider-slide__link" to="/chat" onClick={() => this.handleSelectedPatient(ОЛЬГА_35)}>
            <div
              className={`slider-card ${captionId === ОЛЬГА_35 ? 'slider-card--active' : ''}`}>
              <img className="slider-card__img" src={user2} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Ольга, 35 лет</h4>
                <p className="slider-card__txt">боли внизу живота, боли в молочных железах</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="slider-slide">
          <Link className="slider-slide__link" to="/chat" onClick={() => this.handleSelectedPatient(ГАЛИНА_47)}>
            <div
              className={`slider-card ${captionId === ГАЛИНА_47 ? 'slider-card--active' : ''}`}>
              <img className="slider-card__img" src={user3} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Галина, 47 лет</h4>
                <p className="slider-card__txt">тяжело протекающий климакс</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="slider-slide">
          <Link className="slider-slide__link" to="/chat" onClick={() => this.handleSelectedPatient(КАРИНА_26)}>
            <div
              className={`slider-card ${captionId === КАРИНА_26 ? 'slider-card--active' : ''}`}>
              <img className="slider-card__img" src={user4} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Карина, 26 лет</h4>
                <p className="slider-card__txt">прекратились менструации</p>
              </div>
            </div>
          </Link>
        </div>

      </Slider>
    );
  }

  setCaption = id => this.setState({
    captionId: id
  });

  handleSelectedPatient = (captionId) => {
    this.props.handleSelectedPatient(captionId);
    const actionPatientSelectCard = patientSelectCard();
    const actionIncrement = increment();
    this.props.dispatch(actionPatientSelectCard);
    this.props.dispatch(actionIncrement);
  };

}

const mapStateToProps = state => ({
  gynecologist: state.gynecologistPath,
  endocrinologist: state.fndocrinologistPath,
  count: state.bgCounter
});

const mapDispatchToProps = {
  handleSelectedPatient: patientSelectCard,
  actionIncrement: increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientTabletSlider);
