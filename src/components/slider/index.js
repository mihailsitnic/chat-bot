import React, { Component } from 'react';
import Slider from "react-slick";
import { MARINA_30, ОЛЬГА_35, ГАЛИНА_47, КАРИНА_26 } from '../../constants';
import "./index.css";
import user1 from '../../../src/img/users/user-1.png';
import user2 from '../../../src/img/users/user-2.png';
import user3 from '../../../src/img/users/user-3.png';
import user4 from '../../../src/img/users/user-4.png';
import arrowLeft from '../../../src/img/icons/s-arrow-left.png';
import arrowRight from '../../../src/img/icons/s-arrow-right.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        bottom: "-50px",
        top: "auto",
        right: "50%",
        marginRight: "-35px",
        zIndex: "999",
      }}
      onClick={onClick}
    >
      <button className="arrow-bt-right">
        <img className="arrow-bt__img" src={arrowRight} alt="arrow-right"/>
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        bottom: "-50px",
        top: "auto",
        left: "50%",
        marginLeft: "-50px",
        zIndex: "999",
      }}
      onClick={onClick}
    >
      <button className="arrow-bt-left">
        <img className="arrow-bt__img" src={arrowLeft} alt="arrow-left"/>
      </button>
    </div>
  );
}

class PatientSelectionSlider extends Component {
  state = {
    captionId: "",
  };

  setCaption = id => this.setState({ captionId: id });

  render() {
    const { captionId } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider {...settings}>
          <div className="slider-item">
            <div
              className={`slider-card ${captionId === MARINA_30 ? 'slider-card--active' : ''}`}
              onClick={() => this.setCaption(MARINA_30)}>
              <img className="slider-card__img" src={user1} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Марина, 30 лет</h4>
                <p className="slider-card__txt">не может забеременеть</p>
              </div>
            </div>
            <div
              className={`slider-card ${captionId === ОЛЬГА_35 ? 'slider-card--active' : ''}`}
              onClick={() => this.setCaption(ОЛЬГА_35)}>
              <img className="slider-card__img" src={user2} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Ольга, 35 лет</h4>
                <p className="slider-card__txt">боли внизу живота, боли в молочных железах</p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div
              className={`slider-card ${captionId === ГАЛИНА_47 ? 'slider-card--active' : ''}`}
              onClick={() => this.setCaption(ГАЛИНА_47)}>
              <img className="slider-card__img" src={user3} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Галина, 47 лет</h4>
                <p className="slider-card__txt">тяжело протекающий климакс</p>
              </div>
            </div>
            <div
              className={`slider-card ${captionId === КАРИНА_26 ? 'slider-card--active' : ''}`}
              onClick={() => this.setCaption(ГАЛИНА_47)}>
              <img className="slider-card__img" src={user4} alt="img"/>
              <div className="slider-card__description">
                <h4 className="slider-card__title">Карина, 26 лет</h4>
                <p className="slider-card__txt">прекратились менструации</p>
              </div>
            </div>
          </div>
      </Slider>
    );
  }
}

export default PatientSelectionSlider;
