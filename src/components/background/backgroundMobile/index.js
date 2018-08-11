import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import wave_320_png_1 from '../../../img/bg/320/wave_320_1.png';
import wave_320_webp_1 from '../../../img/bg/320/wave_320_1.webp';
import wave_320_png_2 from '../../../img/bg/320/wave_320_2.png';
import wave_320_webp_2 from '../../../img/bg/320/wave_320_2.webp';
import wave_320_png_3 from '../../../img/bg/320/wave_320_3.png';
import wave_320_webp_3 from '../../../img/bg/320/wave_320_3.webp';
import wave_320_png_4 from '../../../img/bg/320/wave_320_4.png';
import wave_320_webp_4 from '../../../img/bg/320/wave_320_4.webp';
import wave_320_png_5 from '../../../img/bg/320/wawe_320_5.png';
import wave_320_webp_5 from '../../../img/bg/320/wawe_320_5.webp';
import wave_320_png_6 from '../../../img/bg/320/wawe_320_6.png';
import wave_320_webp_6 from '../../../img/bg/320/wawe_320_6.webp';
import wave_320_png_7 from '../../../img/bg/320/wave_320_7.png';
import wave_320_webp_7 from '../../../img/bg/320/wave_320_7.webp';
import wave_320_png_8 from '../../../img/bg/320/wave_320_8.png';
import wave_320_webp_8 from '../../../img/bg/320/wave_320_8.webp';
import wave_320_png_9 from '../../../img/bg/320/wave_320_9.png';
import wave_320_webp_9 from '../../../img/bg/320/wave_320_9.webp';
import wave_320_png_10 from '../../../img/bg/320/wave_320_10.png';
import wave_320_webp_10 from '../../../img/bg/320/wave_320_10.webp';
import people_320_png from '../../../img/bg/320/people_320.png';
import people_320_webp from '../../../img/bg/320/people_320.webp';
import stripes_320_png from '../../../img/bg/320/stripes_320.png';
import stripes_320_webp from '../../../img/bg/320/stripes_320.webp';
import moon_320_png from '../../../img/bg/320/moon_320.png';
import leaf_320_png from '../../../img/bg/320/leaf_320.png';

class Background extends Component {
  static propTypes = {
    count: PropTypes.number
  };

  mobileBackgroundState = () => {
    if (this.props.count === 0) {
      return (
        <div className="bg-mobile">
          <picture>
            <img
              className={`wave_320_people ${this.props.count === 1 ? "wave_320_people--active" : ""}`}
              src={people_320_webp}
              srcSet={people_320_png}
              alt="people" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_1 ${this.props.count === 1 ? "wave_320_png_1--active" : ""}`}
              src={wave_320_webp_1}
              srcSet={wave_320_png_1}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_2 ${this.props.count === 1 ? "wave_320_png_2--active" : ""}`}
              src={wave_320_webp_2}
              srcSet={wave_320_png_2}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_3 ${this.props.count === 1 ? "wave_320_png_3--active" : ""}`}
              src={wave_320_webp_3}
              srcSet={wave_320_png_3}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`stripes_320_png ${this.props.count === 1 ? "stripes_320_png--active" : ""}`}
              src={stripes_320_webp}
              srcSet={stripes_320_png}
              alt="stripes" />
          </picture>
          <img
            className={`moon_320_png ${this.props.count === 1 ? "moon_320_png--active" : ""}`}
            src={moon_320_png} alt="stripes" />
          <img
            className={`leaf_320_png ${this.props.count === 1 ? "leaf_320_png--active" : ""}`}
            src={leaf_320_png} alt="stripes" />
        </div>
      )
    }
    if (this.props.count === 1) {
      return (
        <Fragment>
          <picture>
            <img
              className={`wave_320_png_5 ${this.props.count === 1 ? "wave_320_png_5--active" : ""}`}
              src={wave_320_webp_5}
              srcSet={wave_320_png_5}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_6 ${this.props.count === 1 ? "wave_320_png_6--active" : ""}`}
              src={wave_320_webp_6}
              srcSet={wave_320_png_6}
              alt="wave" />
          </picture>
        </Fragment>
      )
    }
    if (this.props.count === 2) {
      return (
        <Fragment>
          <picture>
            <img
              className={`wave_320_png_4 ${this.props.count === 1 ? "wave_320_png_4--active" : ""}`}
              src={wave_320_webp_4}
              srcSet={wave_320_png_4}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_7 ${this.props.count === 1 ? "wave_320_png_7--active" : ""}`}
              src={wave_320_webp_7}
              srcSet={wave_320_png_7}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_8 ${this.props.count === 1 ? "wave_320_png_8--active" : ""}`}
              src={wave_320_webp_8}
              srcSet={wave_320_png_8}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_9 ${this.props.count === 1 ? "wave_320_png_9--active" : ""}`}
              src={wave_320_webp_9}
              srcSet={wave_320_png_9}
              alt="wave" />
          </picture>
          <picture>
            <img
              className={`wave_320_png_10 ${this.props.count === 1 ? "wave_320_png_10--active" : ""}`}
              src={wave_320_webp_10}
              srcSet={wave_320_png_10}
              alt="wave" />
          </picture>
        </Fragment>
      )
    }
  };

  render() {
    return (
      <div className="background">
        {this.mobileBackgroundState()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.bgCounter
});

export default connect(mapStateToProps)(Background)
