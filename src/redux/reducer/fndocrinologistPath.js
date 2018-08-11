import {FNDOCRINOLOGIST_PATH} from '../constants';

export default (fndocrinologistPath = false, action) => {
  return action.type === FNDOCRINOLOGIST_PATH ? true : fndocrinologistPath
}
