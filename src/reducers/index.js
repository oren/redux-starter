import { combineReducers } from 'redux';
import counter from './counter';
import studies from './studies';

export default combineReducers({
  counter,
  studies
});
