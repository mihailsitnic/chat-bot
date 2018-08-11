import { QUESTION_INDEX, RESET_QUESTION_COUNTER } from '../constants'

export default (questionIndexState = 0, action) => {
  if (action.type === QUESTION_INDEX) {
    return questionIndexState + 1
  }
  if (action.type === RESET_QUESTION_COUNTER) {
    return 0
  }
  return questionIndexState
}
