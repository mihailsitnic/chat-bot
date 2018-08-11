import React, { Component, Fragment } from 'react';
import Media from "react-media";
import './index.css';
import BackgroundDesktop from './../backgroundDesktop';
import BackgroundTablet from './../backgroundTablet';
import BackgroundMobile from './../backgroundMobile';

class Background extends Component {

  renderBackground = () => {
    return (
      <Fragment>
        <Media
          query="(max-width: 320px)"
          render={() => <BackgroundMobile />}
        />
        <Media
          query="(max-width: 768px)"
          render={() => <BackgroundTablet />}
        />
        <Media
          query="(min-width: 768px)"
          render={() => <BackgroundDesktop />}
        />
      </Fragment>
    )
  };

  render() {
    return this.renderBackground()
  }
}

export default Background;
