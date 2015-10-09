import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const FETCH_STUDIES = 'FETCH_STUDIES';
const initialState = { studies: [] };

const getStudies = () => {
  studies: [ { name: 'study 3'}, {name: 'study 4'}];
};

export default createReducer(initialState, {
  // [FETCH_STUDIES] : () => ({ studies: [ { name: 'study 1'}, {name: 'study 2'}] })
  [FETCH_STUDIES] : () => getStudies()
});

