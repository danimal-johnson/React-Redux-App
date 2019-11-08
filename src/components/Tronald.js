import React from 'react';
import { connect } from 'react-redux';
import { fetchTronald } from '../actions';
import "../App.css"

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
          {props.quotes.map(q => (
            <div className="quote-card" key={q.quote_id}>
              {q.value}
            </div>
          ))}
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