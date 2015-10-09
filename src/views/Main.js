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
  backgroundColor: 'grey'
};

export class Main extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    counter  : React.PropTypes.number,
    studies: React.PropTypes.array
  }

  constructor () {
    super();
  }

  _fetchStudies () { this.props.dispatch({ type : 'FETCH_STUDIES' }); }

  render () {
    const Data = this.props.studies;
    const listNodes = Data.map((node) => <li>{node}</li>);

    return (
      <div className='container text-center' style={style}>
        <button className='btn btn-default'
                onClick={::this._fetchStudies}>
          Fetch studies
        </button>
        show list of studies
        <ul>
          {listNodes}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
