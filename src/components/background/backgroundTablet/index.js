import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import wave_768_png_1 from '../../../img/bg/768/wawe-1_768.png';
import wave_768_png_2 from '../../../img/bg/768/wawe-2_768.png';
import wave_768_png_3 from '../../../img/bg/768/wawe-3_768.png';
import wave_768_png_4 from '../../../img/bg/768/wawe-4_768.png';
import wave_768_png_5 from '../../../img/bg/768/wawe-5_768.png';
import wave_768_png_6 from '../../../img/bg/768/wawe-6_768.png';
import wave_768_png_7 from '../../../img/bg/768/wawe-7_768.png';
import people_768_png from '../../../img/bg/768/people_768.png';
import stripes_768_png from '../../../img/bg/768/stripes_768.png';
import moon_768_png from '../../../img/bg/768/moon_768.png';
import leaf1_768_png from '../../../img/bg/768/leaf-1_768.png';
import leaf2_768_png from '../../../img/bg/768/leaf-2_768.png';


class Background extends Component {
  static propTypes = {
    count: PropTypes.number
  };

  tabletBackgroundState = () => {
    if (this.props.count <= 1) {
      return (
        <div className="bg-table">
          <img
            className={`wave_768_png_1 ${this.props.count === 1 ? "wave_768_png_1--active" : ""}`}
            src={wave_768_png_1}
            alt="wave"/>
          <img
            className={`wave_768_png_2 ${this.props.count === 1 ? "wave_768_png_2--active" : ""}`}
            src={wave_768_png_2}
            alt="wave"/>
          <img
            className={`wave_768_png_3 ${this.props.count === 1 ? "wave_768_png_3--active" : ""}`}
            src={wave_768_png_3}
            alt="wave"/>
          <img
            className={`people_768_png ${this.props.count === 1 ? "people_768_png--active" : ""}`}
            src={people_768_png}
            alt="wave"/>
          <img
            className={`stripes_768_png ${this.props.count === 1 ? "stripes_768_png--active" : ""}`}
            src={stripes_768_png}
            alt="wave"/>
          <img
            className={`moon_768_png ${this.props.count === 1 ? "moon_768_png--active" : ""}`}
            src={moon_768_png}
            alt="wave"/>
          <img
            className={`leaf1_768_png ${this.props.count === 1 ? "leaf1_768_png--active" : ""}`}
            src={leaf1_768_png}
            alt="wave"/>
          <img
            className={`leaf2_768_png ${this.props.count === 1 ? "leaf2_768_png--active" : ""}`}
            src={leaf2_768_png}
            alt="wave"/>
        </div>
      )
    }
    if (this.props.count === 2) {
      return (
        <Fragment>
          <img
            className="wave_768_png_4"
            src={wave_768_png_4}
            alt="wave"/>
          <img
            className="wave_768_png_5"
            src={wave_768_png_5}
            alt="wave"/>
          <img
            className="wave_768_png_6"
            src={wave_768_png_6}
            alt="wave"/>
          <img
            className="wave_768_png_7"
            src={wave_768_png_7}
            alt="wave"/>
        </Fragment>
      )
    }
    if (this.props.count > 2) {
      return <div />
    }
  };

  render() {
    return (
      <div className="background">
        {this.tabletBackgroundState()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.bgCounter
});

export default connect(mapStateToProps)(Background)
