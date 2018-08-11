import { INCREMENT, DECREMENT, GYNECOLOGIST_PATH, FNDOCRINOLOGIST_PATH, PATIENT_SELECT_CARD, QUESTION_INDEX, RESET_QUESTION_COUNTER } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function questionIndex() {
  return {
    type: QUESTION_INDEX
  }
}

export function gynecologistPath() {
  return {
    type: GYNECOLOGIST_PATH
  }
}

export function fndocrinologistPath() {
  return {
    type: FNDOCRINOLOGIST_PATH
  }
}

export function patientSelectCard(id) {
  return {
    type: PATIENT_SELECT_CARD,
    payload: id
  }
}

export function resetQuestionCounter() {
  return {
    type: RESET_QUESTION_COUNTER
  }
}
