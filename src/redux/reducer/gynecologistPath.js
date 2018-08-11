import {GYNECOLOGIST_PATH} from '../constants';

export default (gynecologistPath = false, action) => {
  return action.type === GYNECOLOGIST_PATH ? true : gynecologistPath
}
