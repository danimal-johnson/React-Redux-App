import React from 'react';
import { connect } from 'react-redux';
import { fetchTronald } from '../actions';

function Tronald(props) {
  console.log("Tronald:", props);

  return (
    <>
      <button onClick={() => props.dispatch(fetchTronald())}>
        Get Quotes
      </button>
      {props.isFetching && <div>Getting data...</div>}
      {props.error && <div>{props.error.message}</div>}

      <h2>The response:</h2>
      <div className="results">
      <ul>
          {props.quotes.map(p => (
            <li key={p.name}>
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = {
  // Action Creators go here!
  fetchTronald
}

export default connect (state => {
  console.log("mapStateToProps.STATE", state);
  return state;
})(Tronald);