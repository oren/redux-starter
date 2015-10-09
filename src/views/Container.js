import React       from 'react';
import { connect } from 'react-redux';
import LeftNav     from 'views/LeftNav';
import TopNav      from 'views/TopNav';
import Action      from 'views/Action';
import Main        from 'views/Main';

// We define mapStateToProps where we'd normally use the @connect
// decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter
});

export class Container extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    counter  : React.PropTypes.number
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div className='container text-center'>
        <LeftNav/>
        <TopNav/>
        <Action/>
        <Main/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Container);
