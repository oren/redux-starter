import { combineReducers } from 'redux';
import counter from './counter';
import counter from './studies';

export default combineReducers({
  counter,
  studies
});
