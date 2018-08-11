import { PATIENT_SELECT_CARD } from '../constants';

export default (selectedPatientId = "", action) => {
  return action.type === PATIENT_SELECT_CARD ? action.payload : selectedPatientId
}
