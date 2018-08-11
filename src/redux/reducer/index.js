import { combineReducers } from 'redux';
import counterReducer from './bgCounter';
import gynecologistReducer from './gynecologistPath';
import fndocrinologistReducer from './fndocrinologistPath';
import patientSelectReducer from './patientSelectCard';
import questionIndexReducer from './questionIndex';

export default combineReducers({
  bgCounter: counterReducer,
  gynecologistPath: gynecologistReducer,
  fndocrinologistPath: fndocrinologistReducer,
  patientSelectCard: patientSelectReducer,
  questionIndex: questionIndexReducer,
})
