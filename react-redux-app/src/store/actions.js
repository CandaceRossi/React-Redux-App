import axios from "axios";

export const FETCHING_FISHES_START = "FETCHING_FISHES_START";
export const FETCHING_FISHES_SUCCESS = "FETCHING_FISHES_SUCCESS";
export const FETCHING_FISHES_FAILURE = "FETCHING_FISHES_FAILURE";

export const getFishes = () => dispatch => {
  dispatch({ type: FETCHING_FISHES_START });
  axios
    .get("http://hotline.whalemuseum.org/api.json?species=orca")
    .then(res => {
      console.log("Action Res", res.data);
      dispatch({ type: FETCHING_FISHES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_FISHES_FAILURE,
        payload: err.response
      });
    });
};

// const thunk = next => action => store => {
//   if (typeof action === 'object' {
//     next(action)
//   } else if (typeof action === 'function' {
//     action(store.dispatch)
//   }
// }
