import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const FETCH_STUDIES = 'FETCH_STUDIES';
const initialState = { studies: [] };

const getStudiesFromServer = () => {
  fetch('studies.json').then(function(response) {
    console.log('res', response.status);
    return response.json();
  }).catch(function(err) {
    console.error('Error:', err);
  });

  // return ({studies: [ { name: 'study 3'}, {name: 'study 4'}]});
};

export default createReducer(initialState, {
  [FETCH_STUDIES] : () => getStudiesFromServer()
});

