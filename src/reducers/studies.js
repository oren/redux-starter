import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const FETCH_STUDIES = 'FETCH_STUDIES';

const initialState = 0;
export default createReducer(initialState, {
  [FETCH_STUDIES] : (state) => state + 1
});
