import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionIndex, patientSelectCard, resetQuestionCounter } from '../../../src/redux/AC';
import './index.css';
import ChatMessage from '../chatMsg';
import Patient from '../../components/patient';
import toggleArrowUp from '../../img/icons/toggle-arrow-up.png';

const api = "http://api-d.sovadigital.ru/api/questions";
const apiCheckAnswers = "http://api-d.sovadigital.ru/api/check_answers/";

class ChatPage extends Component {

  static propTypes = {
    questionIndex: PropTypes.number,
    patientSelect: PropTypes.string,
    resetQuestionCounter: PropTypes.func,
  };

  state = {
    chatArr: [],
    messages: [],
    allQuestions: [],
    currentQuestion: {},
    answersTabletBt: false,
    truncated: false,
    isLoading: false,
    expanded: false,
    answer1: {
      checkbox: null,
      checked: false
    },
    answer2: {
      checkbox: null,
      checked: false
    },
    answer3: {
      checkbox: null,
      checked: false
    },
    answer4: {
      checkbox: null,
      checked: false
    },
    answer5: {
      checkbox: null,
      checked: false
    },
    answer6: {
      checkbox: null,
      checked: false
    },
  };


  renderAllQuestions = () => {
    const q = this.state.currentQuestion;
    return (
      this.props.questionIndex <= 5 ?
      <ul key={q.id} className="answersCheckList__list">
        <li
          id={q.answer_1 === null ? "answersCheckList__li--none" : ""}
          className={this.state.answer1.checkbox ?
            "answersCheckList__li--active" :
            "answersCheckList__li"}>
          <label className="answersCheckList__label" htmlFor="answer-1">
            {q.answer_1}
            <input
              className="answersCheckList__checkbox"
              type="checkbox"
              onChange={this.handleChangeChecked__1}
              id="answer-1"
              name="answer-1"
              checked={this.state.answer1.checked}
            />
            <span className="answersCheckList__checkmark" />
          </label>
        </li>
        <li
          id={q.answer_2 === null ? "answersCheckList__li--none" : ""}
          className={this.state.answer2.checkbox ?
            "answersCheckList__li--active" :
            "answersCheckList__li"}>
          <label className="answersCheckList__label" htmlFor="answer-2">
            {q.answer_2}
            <input
              className="answersCheckList__checkbox"
              type="checkbox"
              onChange={this.handleChangeChecked__2}
              id="answer-2"
              name="answer-2"
              checked={this.state.answer2.checked}
            />
            <span className="answersCheckList__checkmark" />
          </label>
        </li>
        <li
          id={q.answer_3 === null ? "answersCheckList__li--none" : ""}
          className={this.state.answer3.checkbox ?
            "answersCheckList__li--active" :
            "answersCheckList__li"}>
          <label className="answersCheckList__label" htmlFor="answer-3">
            {q.answer_3}
            <input
              className="answersCheckList__checkbox"
              onChange={this.handleChangeChecked__3}
              type="checkbox"
              id="answer-3"
              name="answer-3"
              checked={this.state.answer3.checked}
            />
            <span className="answersCheckList__checkmark" />
          </label>
        </li>
        <li
          id={q.answer_4 === null ? "answersCheckList__li--none" : ""}
          className={this.state.answer4.checkbox ?
            "answersCheckList__li--active" :
            "answersCheckList__li"}>
          <label className="answersCheckList__label" htmlFor="answer-4">
            {q.answer_4}
            <input
              className="answersCheckList__checkbox"
              type="checkbox"
              onChange={this.handleChangeChecked__4}
              id="answer-4"
              name="answer-4"
              checked={this.state.answer4.checked}
            />
            <span className="answersCheckList__checkmark" />
          </label>
        </li>
        <li
          id={q.answer_5 === null ? "answersCheckList__li--none" : ""}
          className={this.state.answer5.checkbox ?
            "answersCheckList__li--active" :
            "answersCheckList__li"}>
          <label className="answersCheckList__label" htmlFor="answer-5">
            {q.answer_5}
            <input
              className="answersCheckList__checkbox"
              onChange={this.handleChangeChecked__5}
              type="checkbox"
              id="answer-5"
              name="answer-5"
              checked={this.state.answer5.checked}
            />
            <span className="answersCheckList__checkmark" />
          </label>
        </li>
        <li
          id={q.answer_6 === null ? "answersCheckList__li--none" : ""}
          className={this.state.answer6.checkbox ?
            "answersCheckList__li--active" :
            "answersCheckList__li"}>
          <label className="answersCheckList__label" htmlFor="answer-6">
            <input
              className="answersCheckList__checkbox"
              onChange={this.handleChangeChecked__6}
              type="checkbox"
              id="answer-6"
              name="answer-6"
              checked={this.state.answer6.checked}
            />
            {q.answer_6}
            <span className="answersCheckList__checkmark" />
          </label>
        </li>
      </ul> :
      <div />
    )
  };

  doAnchors = () => {
    const sup = document.getElementsByTagName('sup')[0];
    if( sup !== undefined ){
      const wrapper = document.createElement('a');
      wrapper.href = "#footer";
      wrapper.innerHTML = sup.outerHTML;
      sup.parentNode.replaceChild(wrapper, sup);
    }
  };

  renderDescriptions = () => {
    const q = this.state.currentQuestion;
    return <div key={q.id}><div dangerouslySetInnerHTML={{__html: q.description}} /></div>
  };

  renderQuestion = () => {
    const q = this.state.currentQuestion;
    return <div key={q.id}><div dangerouslySetInnerHTML={{__html: q.content}} /></div>
  };

  renderMessages = () => {
    const { isLoading, messages } = this.state;
    const renderedMessages = messages.map(msg => {
      if (msg.html) {
        return (
          <article className={`message__${msg.articleClassName || msg.type}`} key={msg.html}>
            <div>
              <div className="message__text" dangerouslySetInnerHTML={{__html: msg.html}} />
            </div>
            <span className="message__dialog" />
          </article>
        )
      } else {
        return <ChatMessage
          key={msg.txt}
          alert={msg.alert}
          check={msg.check}
          txt={msg.txt}
          articleClassName={msg.articleClassName}
        />
      }
      }
    );
    if (isLoading) {
      renderedMessages.push(<ChatMessage articleClassName="LOADER" />);
    }
    return renderedMessages;
  };

  render() {
    const { more, less, lines, questionIndex } = this.props;
    const { expanded, truncated, answer1, answer2, answer3, answer4, answer5, answer6 } = this.state;
    if (questionIndex >= 7) {
      return <Redirect to="/resume" />
    }

    const descriptions = this.renderDescriptions();
    this.doAnchors();
    const allQuestions = this.renderAllQuestions();

    return (
      <Fragment>
        <section className="chatPage">
          <div className="row">
            <div className="col-6 chatPage__chat">

              <aside className="chatPage-sidebar">
                <div className="sidebar__steps">
                  <span className="sidebar__current-step">{`0${this.props.questionIndex}`}</span>
                  <div className="sidebar__line" />
                  <span className="sidebar__total-step">14</span>
                </div>
              </aside>

              <section className="chatPage-patientInfo">
                <Patient />
              </section>

              <section className="chatPage-messages">
                <div className="message__WHITE">
                  <Truncate
                    className="message__description-txt"
                    lines={!expanded && lines}
                    ellipsis={(
                      <Fragment>
                        ...
                        <p><a className="message__more" onClick={this.toggleLines}>{more}</a></p>
                      </Fragment>
                    )}
                    onTruncate={this.handleTruncate}>
                    {descriptions}
                  </Truncate>
                  {!truncated && expanded && (
                    <Fragment> <br />
                        <a className="message__less" onClick={this.toggleLines}>{less}</a>
                    </Fragment>
                  )}
                </div>

                {this.renderMessages()}
              </section>

            </div>
            <div className={`col-6 tablet-class ${this.state.answersTabletBt ? "tablet-class--active" : ""}`}>
              <section className="chatPage-answersCheckList">
                <button className="toggleTabletAnswersCheckList" onClick={this.hanhleBtAnswersCheckList}>
                  <img
                    className={`toggleTabletAnswersCheckList__img ${this.state.answersTabletBt ? "toggleTabletAnswersCheckList__img--active" : ""}`}
                    src={toggleArrowUp} alt="toggle arrow up"/>
                  {this.state.answersTabletBt ? <div /> : <p className="toggleTabletAnswersCheckList__txt">Показать варианты ответов</p>}
                </button>

                <form action="" method="post" className="answersCheckList__form">
                  {allQuestions}
                </form>

                {this.props.questionIndex === 6 ?
                <Link to="/resume"
                  className="answersCheckList__send-bt answersCheckList__send-bt--active">Готово</Link>:
                <button
                  onClick={this.submitAnswers}
                  className={
                    answer1.checked ||
                    answer2.checked ||
                    answer3.checked ||
                    answer4.checked ||
                    answer5.checked ||
                    answer6.checked ?
                      "answersCheckList__send-bt answersCheckList__send-bt--active" :
                      "answersCheckList__send-bt"
                  }>Далее</button>
                }

              </section>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }

  componentDidMount() {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        // debugger;
        const index = this.props.questionIndex;
        const messages = [...this.state.messages];
        const allQuestions = Object.values(jsonRes.questions)[0];
        const currentQuestion = allQuestions[index];
        messages.push({
          html: currentQuestion.content,
          date: Date.now(),
          type: 'QUESTION'
        });
        this.setState({
          currentQuestion: currentQuestion,
          allQuestions,
          messages,
        });
      })
      .catch((err) => {
        console.log('error === ', err);
      });
  }

  componentWillUnmount() {
    this.props.resetQuestionCounter();
  }

  handleTruncate = this.handleTruncate.bind(this);

  toggleLines = this.toggleLines.bind(this);

  hanhleBtAnswersCheckList = () => {
    this.setState({
      answersTabletBt: !this.state.answersTabletBt,
    });
  };

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  handleChangeChecked__1 = (e) => {
    const checked = e.target.checked;
    const checkedValue = checked ? 1 : "";
    this.setState({
      answer1: {
        checkbox: checkedValue,
        checked: checked
      }
    });
  };

  handleChangeChecked__2 = (e) => {
    const checked = e.target.checked;
    const checkedValue = checked ? 2 : "";
    this.setState({
      answer2: {
        checkbox: checkedValue,
        checked: checked
      }
    });
  };

  handleChangeChecked__3 = (e) => {
    const checked = e.target.checked;
    const checkedValue = checked ? 3 : "";
    this.setState({
      answer3: {
        checkbox: checkedValue,
        checked: checked
      }
    });
  };

  handleChangeChecked__4 = (e) => {
    const checked = e.target.checked;
    const checkedValue = checked ? 4 : "";
    this.setState({
      answer4: {
        checkbox: checkedValue,
        checked: checked
      }
    });
  };

  handleChangeChecked__5 = (e) => {
    const checked = e.target.checked;
    const checkedValue = checked ? 5 : "";
    this.setState({
      answer5: {
        checkbox: checkedValue,
        checked: checked
      }
    });
  };

  handleChangeChecked__6 = (e) => {
    const checked = e.target.checked;
    const checkedValue = checked ? 6 : "";
    this.setState({
      answer6: {
        checkbox: checkedValue,
        checked: checked
      }
    });
  };

  getSelectedAnswers = () => {
    const selectedAnswers = [];
    if (this.state.answer1.checked) {
      selectedAnswers.push({
        response_text: this.state.currentQuestion.answer_1,
        id: this.state.answer1.checkbox,
        class: "ANSWER",
      });
    } if (this.state.answer2.checked) {
      selectedAnswers.push({
        response_text: this.state.currentQuestion.answer_2,
        id: this.state.answer2.checkbox,
        class: "ANSWER",
      });
    } if (this.state.answer3.checked) {
      selectedAnswers.push({
        response_text: this.state.currentQuestion.answer_3,
        id: this.state.answer3.checkbox,
        class: "ANSWER",
      });
    } if (this.state.answer4.checked) {
      selectedAnswers.push({
        response_text: this.state.currentQuestion.answer_4,
        id: this.state.answer4.checkbox,
        class: "ANSWER",
      });
    } if (this.state.answer5.checked) {
      selectedAnswers.push({
        response_text: this.state.currentQuestion.answer_5,
        id: this.state.answer5.checkbox,
        class: "ANSWER",
      });
    } if (this.state.answer6.checked) {
      selectedAnswers.push({
        response_text: this.state.currentQuestion.answer_6,
        id: this.state.answer6.checkbox,
        class: "ANSWER",
      });
    }
    return selectedAnswers
  };

  resetState = (props) => {
    this.setState({
      isLoading: false,
      answer1: {
        checkbox: "",
        checked: false,
      },
      answer2: {
        checkbox: "",
        checked: false,
      },
      answer3: {
        checkbox: "",
        checked: false,
      },
      answer4: {
        checkbox: "",
        checked: false,
      },
      answer5: {
        checkbox: "",
        checked: false,
      },
      answer6: {
        checkbox: "",
        checked: false,
      },
      ...props
    });
  };

  getCheckedAnswers = () => ([
      this.state.answer1.checkbox,
      this.state.answer2.checkbox,
      this.state.answer3.checkbox,
      this.state.answer4.checkbox,
      this.state.answer5.checkbox,
      this.state.answer6.checkbox
    ].filter(function(x) {
      return x !== undefined && x !== null && x !== "";
    })
  );

  getQuestionUrl = () => `${apiCheckAnswers}${this.props.questionIndex + 1}`;

  submitAnswers = () => {
    const selectedAnswers = this.getSelectedAnswers();
    const messages = [...this.state.messages];
    selectedAnswers.forEach(m => {
      messages.push({
        articleClassName: m.class,
        check: '',
        txt: m.response_text,
        date: Date.now(),
        type: 'ANSWER',
      })
    });

    const checkedAnswers = this.getCheckedAnswers();
    const currentQuestionUrl = this.getQuestionUrl();

    this.resetState({
      isLoading: true,
      answersTabletBt: !this.state.answersTabletBt,
    });
    fetch(currentQuestionUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers: checkedAnswers }),
    }).then((response) => {
      return response.json();
    }).then((response) => {
      messages.push({
        alert: response.all_correct ? "" : "ALERT",
        check: response.all_correct ? "CHECK" : "",
        txt: response.response_text,
        articleClassName: 'INFO',
        date: Date.now(),
        type: 'RESPONSE',
      });

      const { currentQuestion, allQuestions } = this.state;
      const nextQuestion = allQuestions[this.props.questionIndex + 1];
      if (response.all_correct) {
        this.props.confirmCorrectAnswer();

        messages.push({
          html: nextQuestion.next_question,
          date: Date.now(),
          type: 'QUESTION',
          articleClassName: 'WHITE',
        });
        messages.push({
          html: nextQuestion.description,
          date: Date.now(),
          type: 'WHITE',
          articleClassName: 'WHITE',
        });
        messages.push({
          html: nextQuestion.content,
          date: Date.now(),
          type: 'QUESTION',
          articleClassName: 'QUESTION',
        });

        this.setState({ messages, isLoading: false, currentQuestion: nextQuestion });
      } else {
        messages.push({
          html: currentQuestion.response_text,
          date: Date.now(),
          type: 'CONTENT',
          articleClassName: 'INFO',
          alert: 'ALERT'
        });

        this.setState({ messages, isLoading: false });
      }
      }).catch((err) => {
      console.log('err === ', err);
      this.setState({ isLoading: false });
    });
  };
}

ChatPage.defaultProps = {
  lines: 4,
  more: 'Читать полностью',
  less: 'Скрыть текст'
};

ChatPage.propTypes = {
  text: PropTypes.node,
  lines: PropTypes.number,
  confirmCorrectAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  questionIndex: state.questionIndex,
  patientSelectCard
});

const mapDispatchToProps = {
  confirmCorrectAnswer: questionIndex,
  patientSelect: patientSelectCard,
  resetQuestionCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)
