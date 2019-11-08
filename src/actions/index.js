export const FETCH_TRONALD_LOADING = "FETCH_TRONALD_LOADING";
export const FETCH_TRONALD_SUCCESS = "FETCH_TRONALD_LOADING";
export const FETCH_TRONALD_FAILED = "FETCH_TRONALD_LOADING";

export const tronaldLoading = () => ({ type: FETCH_TRONALD_LOADING });
export const tronaldLoadSuccess = data => ({
  type: FETCH_TRONALD_SUCCESS,
  payload: data
});
export const tronaldLoadFailed = error => ({
  type: FETCH_TRONALD_FAILED,
  payload: error
});


export function fetchTronald() {

  return function(dispatch) {
    dispatch(tronaldLoading());

    return fetch(`https://api.tronalddump.io/search/quote?query=obama`)
      .then (json => 
        dispatch(tronaldLoadSuccess(json.results))
        )
      .catch(error => dispatch(tronaldLoadFailed(error)));
  };
}