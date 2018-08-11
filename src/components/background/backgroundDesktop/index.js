import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import wave_png_1 from '../../../img/bg/desktop/wave-1.png';
import wave_webp_1 from '../../../img/bg/desktop/wave-1.webp';
import wave_png_2 from '../../../img/bg/desktop/wave-2.png';
import wave_webp_2 from '../../../img/bg/desktop/wave-2.webp';
import wave_png_3 from '../../../img/bg/desktop/wave-3.png';
import wave_webp_3 from '../../../img/bg/desktop/wave-3.webp';
import wave_png_4 from '../../../img/bg/desktop/wave-4.png';
import wave_webp_4 from '../../../img/bg/desktop/wave-4.webp';
import people_png from '../../../img/bg/desktop/people.png';
import people_webp from '../../../img/bg/desktop/people.webp';
import stripes_png from '../../../img/bg/desktop/stripes.png';
import moon_png from '../../../img/bg/desktop/moon.png';
import leaf_png_1 from '../../../img/bg/desktop/leaf-1.png';
import leaf_png_2 from '../../../img/bg/desktop/leaf-2.png';
import wave_png_5 from '../../../img/bg/desktop/wave-5.png';
import wave_webp_5 from '../../../img/bg/desktop/wave-5.webp';
import wave_png_6 from '../../../img/bg/desktop/wave-6.png';
import wave_webp_6 from '../../../img/bg/desktop/wave-6.webp';
import wave_png_7 from '../../../img/bg/desktop/wave-7.png';
import wave_webp_7 from '../../../img/bg/desktop/wave-7.webp';
import wave_png_8 from '../../../img/bg/desktop/wave-8.png';
import wave_webp_8 from '../../../img/bg/desktop/wave-8.webp';
import wave_png_9 from '../../../img/bg/desktop/wave-9.png';
import wave_webp_9 from '../../../img/bg/desktop/wave-9.webp';
import wave_png_10 from '../../../img/bg/desktop/wave-10.png';
import wave_webp_10 from '../../../img/bg/desktop/wave-10.webp';

class BackgroundDesktop extends Component {
  static propTypes = {
    count: PropTypes.number
  };

  render() {
    const firstBackgroundState = this.props.count <= 1 &&
      <div className="bg-desktop">
        <picture>
          <img
            className={this.props.count === 1 ? "wave-1 wave-1--active" : "wave-1"}
            src={wave_webp_1}
            srcSet={wave_png_1}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 1 ? "wave-2 wave-2--active" : "wave-2"}
            src={wave_webp_2}
            srcSet={wave_png_2}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 1 ? "wave-3 wave-3--active" : "wave-3"}
            src={wave_webp_3}
            srcSet={wave_png_3}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 1 ? "wave-4 wave-4--active" : "wave-4"}
            src={wave_webp_4}
            srcSet={wave_png_4}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 1 ? "people people--active" : "people"}
            src={people_webp}
            srcSet={people_png}
            alt="people" />
        </picture>
        <img
          className={this.props.count === 1 ? "stripes stripes--active" : "stripes"}
          src={stripes_png} alt="stripes" />
        <img
          className={this.props.count === 1 ? "moon moon--active" : "moon"}
          src={moon_png} alt="moon" />
        <img
          className={this.props.count === 1 ? "leaf-1 leaf-1--active" : "leaf-1"}
          src={leaf_png_1} alt="leaf" />
        <img
          className={this.props.count === 1 ? "leaf-2 leaf-2--active" : "leaf-2"}
          src={leaf_png_2} alt="leaf" />
      </div>;

    const secondBackgroundState = this.props.count === 2 &&
      <Fragment>
        <picture>
          <img
            className={this.props.count === 2 ? "wave-5 wave-5--active" : "wave-5"}
            src={wave_webp_5}
            srcSet={wave_png_5}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 2 ? "wave-6 wave-6--active" : "wave-6"}
            src={wave_webp_6}
            srcSet={wave_png_6}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 2 ? "wave-7 wave-7--active" : "wave-7"}
            src={wave_webp_7}
            srcSet={wave_png_7}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 2 ? "wave-8 wave-8--active" : "wave-8"}
            src={wave_webp_8}
            srcSet={wave_png_8}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 2 ? "wave-9 wave-9--active" : "wave-9"}
            src={wave_webp_9}
            srcSet={wave_png_9}
            alt="wave" />
        </picture>
        <picture>
          <img
            className={this.props.count === 2 ? "wave-10 wave-10--active" : "wave-10"}
            src={wave_webp_10}
            srcSet={wave_png_10}
            alt="wave" />
        </picture>
      </Fragment>;

    return (
      <div className="background">
        {firstBackgroundState}
        {secondBackgroundState}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.bgCounter
});

export default connect(mapStateToProps)(BackgroundDesktop)
