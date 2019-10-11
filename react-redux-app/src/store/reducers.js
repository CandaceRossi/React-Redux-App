import {
  FETCHING_FISHES_START,
  FETCHING_FISHES_SUCCESS,
  FETCHING_FISHES_FAILURE
} from "./actions";

const initialState = {
  fishFacts: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  console.log("Reducer State", state);
  switch (action.type) {
    case FETCHING_FISHES_START:
      return {
        ...state,
        // photo: action.payload,
        // species: action.payload,
        // description: action.payload,
        // quantity: action.payload,
        // location: action.payload,
        isFetching: true,
        error: ""
      };

    case FETCHING_FISHES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,

        fishFacts: action.payload,

        error: ""
      };
    case FETCHING_FISHES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
