import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import alertIcon from '../../img/icons/alert.png';
import checkIcon from '../../img/icons/check.png';

/* Props: WHITE, INFO, QUESTION, ANSWER, LOADER, ALERT, CHECK
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */

const loader =
  <div className="loading-dots">
    <div className="loading-dots--dot" />
    <div className="loading-dots--dot" />
    <div className="loading-dots--dot" />
  </div>;

const alert =
  <div>
    <span className="message__alert">
      <img src={alertIcon} alt="alert icon"/>
    </span>
    <h2 className="message__alert-title">Попробуйте еще раз</h2>
  </div>;

const check =
  <div>
    <span className="message__check">
      <img src={checkIcon} alt="check icon"/>
    </span>
    <h2 className="message__check-title">Верно!</h2>
  </div>;


const ChatMessage = props => {
  return (
    <article className={`message__${props.articleClassName}`}>
      {props.alert === "ALERT" ? alert : ""}
      {props.check === "CHECK" ? check : ""}
      {props.articleClassName === "LOADER" ? loader : ""}
      <p className="message__text" dangerouslySetInnerHTML={{__html: props.txt}} />
      <span className="message__dialog" />
    </article>
  );
}

ChatMessage.defaultProps = {
  txt: "",
  alert: "",
  check: "",
  articleClassName: "",
};

ChatMessage.propTypes = {
  txt: PropTypes.string,
  alert: PropTypes.string,
  check: PropTypes.string,
  articleClassName: PropTypes.string,
};

export default ChatMessage;
