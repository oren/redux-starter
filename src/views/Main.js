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

const style = {
  color: 'blue'
};

export class Main extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    counter  : React.PropTypes.number
  }

  constructor () {
    super();
  }

  _fetchStudies () { this.props.dispatch({ type : 'FETCH_STUDIES' }); }

  render () {
    return (
      <div className='container text-center' style={style}>
        show list of studies
      </div>
    );
  }
}


export default connect(mapStateToProps)(Main);
