import { INCREMENT, DECREMENT } from '../constants';

export default (bgCounterState = 0, action) => {
  if (action.type === INCREMENT) {
    return bgCounterState + 1
  }
  if (action.type === DECREMENT) {
    return bgCounterState - 1
  }
  return bgCounterState
}
