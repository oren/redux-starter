import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import Container    from 'views/Container';

export default (
  <Route component={CoreLayout}>
    <Route name='home' path='/' component={Container} />
  </Route>
);
