import React       from 'react';
import { connect } from 'react-redux';

// We define mapStateToProps where we'd normally use the @connect
// decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter
});
export class Action extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    counter  : React.PropTypes.number
  }

  constructor () {
    super();
  }

  // normally you'd import an action creator, but I don't want to create
  // a file that you're just going to delete anyways!
  _increment () {
    this.props.dispatch({ type : 'COUNTER_INCREMENT' });
  }

  render () {
    return (
      <div className='container text-center'>
        <button className='btn btn-default'
                onClick={::this._increment}>
          Add new study
        </button>
        <h2>Number of studies: {this.props.counter}</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Action);
