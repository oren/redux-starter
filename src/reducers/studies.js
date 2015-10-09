import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const FETCH_STUDIES = 'FETCH_STUDIES';

const initialState = { studies: [] };
export default createReducer(initialState, {
  [FETCH_STUDIES] : () => ({ studies: [ { name: 'study 1'}, {name: 'study 2'}] })
});


