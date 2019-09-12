import axios from "axios";

export const FETCHING_FISHES_START = "FETCHING_FISHES_START";
export const FETCHING_FISHES_SUCCESS = "FETCHING_FISHES_SUCCESS";
export const FETCHING_FISHES_FAILURE = "FETCHING_FISHES_FAILURE";

export const getFishes = state => dispatch => {
  dispatch({ type: FETCHING_FISHES_START });
  axios
    .get("http://hotline.whalemuseum.org/api.json")
    .then(res => {
      console.log("see this response", res);
      dispatch({ type: FETCHING_FISHES_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_FISHES_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};
