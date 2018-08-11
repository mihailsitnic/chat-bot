import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MARINA_30, ОЛЬГА_35, ГАЛИНА_47, КАРИНА_26 } from '../../constants';
import './index.css';
import patientImg1 from '../../../src/img/users/user-1.png';
import patientImg2 from '../../../src/img/users/user-2.png';
import patientImg3 from '../../../src/img/users/user-3.png';
import patientImg4 from '../../../src/img/users/user-4.png';

class Patient extends Component {

  static propTypes = {
    patientSelect: PropTypes.string
  };

  renderPatient = () => {
    if (this.props.patientSelect === MARINA_30) {
      return (
        <div className="patient__description">
          <img src={patientImg1} alt="patient" className="patient__img"/>
          <h4 className="patient__title">Марина, 30 лет</h4>
          <p className="patient__txt">не может забеременеть</p>
        </div>
      )
    }
    if (this.props.patientSelect === ОЛЬГА_35) {
      return (
        <div className="patient__description">
          <img src={patientImg2} alt="patient" className="patient__iemg"/>
          <h4 className="patient__title">Ольга, 35 лет</h4>
          <p className="patient__txt">боли внизу живота, боли в молочных железах</p>
        </div>
      )
    }
    if (this.props.patientSelect === ГАЛИНА_47) {
      return (
        <div className="patient__description">
          <img src={patientImg3} alt="patient" className="patient__img"/>
          <h4 className="patient__title">Галина, 47 лет</h4>
          <p className="patient__txt">тяжело протекающий климакс</p>
        </div>
      )
    }
    if (this.props.patientSelect === КАРИНА_26) {
      return (
        <div className="patient__description">
          <img src={patientImg4} alt="patient" className="patient__img"/>
          <h4 className="patient__title">Карина, 26 лет</h4>
          <p className="patient__txt">прекратились менструации</p>
        </div>
      )
    }
  };

  render() {
    return (
      <div className="patient">
        {this.renderPatient()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patientSelect: state.patientSelectCard
});

export default connect(mapStateToProps)(Patient);
