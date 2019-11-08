import axios from 'axios';
export const FETCH_TRONALD_LOADING = "FETCH_TRONALD_LOADING";
export const FETCH_TRONALD_SUCCESS = "FETCH_TRONALD_SUCCESS";
export const FETCH_TRONALD_FAILED = "FETCH_TRONALD_FAILED";

export const tronaldLoading = () => ({
  type: FETCH_TRONALD_LOADING
});
export const tronaldLoadSuccess = data => ({
  type: FETCH_TRONALD_SUCCESS,
  payload: data
});
export const tronaldLoadFailed = error => ({
  type: FETCH_TRONALD_FAILED,
  payload: error
});


export function fetchTronald() {
  // const herokuCorsFix="https://cors-anywhere.herokuapp.com/";
  const baseUrl="https://api.tronalddump.io/search/quote?query=obama";
  // const searchTerm="obama";
  // const baseUrl="https://pokeapi.co/api/v2/pokemon";
  const wholeEnchilada = baseUrl;
  console.log ("Going to get this:", wholeEnchilada);

  return function(dispatch) {
    dispatch(tronaldLoading());

    return axios
      .get(`${wholeEnchilada}`)
      .then(response => response.data._embedded.quotes)
      .then(quotes =>
        dispatch(tronaldLoadSuccess(quotes)))
      .catch(error => dispatch(tronaldLoadFailed(error))
    );
  };
}