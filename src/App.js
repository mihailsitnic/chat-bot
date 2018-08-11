import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Background from './components/background/backgroundState';
import ChooseSpecialtyPage from '../src/components/chooseSpecialtyPage';
import DiagnosisPage from '../src/components/diagnosisPage';
import PatientSelectionPage from '../src/components/patientSelectionPage';
import ChatPage from '../src/components/chatPage';
import FinalPage from '../src/components/finalPage';
import Footer from '../src/components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <section className="content">
            <Header />
            <Background />
            <Route exact path="/" component={ChooseSpecialtyPage} />
            <Route path="/diagnosis" component={DiagnosisPage} />
            <Route path="/patient-selection" component={PatientSelectionPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/resume" component={FinalPage} />
          </section>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
