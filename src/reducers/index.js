import {
  FETCH_TRONALD_LOADING,
  FETCH_TRONALD_SUCCESS,
  FETCH_TRONALD_FAILED 
} from '../actions';

const initialState = {
  quotes: [],
  error: null,
  isFetching: false
}

function reducer(state=initialState, action) {
  console.log("Reducer:", action);
  switch (action.type) {
    case FETCH_TRONALD_LOADING:
      console.log("Reducer loading");
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_TRONALD_SUCCESS:
      console.log("Reducer success");
      return {
        ...state,
        quotes: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_TRONALD_FAILED:
        console.log("Reducer failed");
        return {
          ...state,
          quotes: [],
          isFetching: false,
          error: action.payload
        };
    default:
      return state;
  }
}

export default reducer;