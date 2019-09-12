import {
  FETCHING_FISHES_START,
  FETCHING_FISHES_SUCCESS,
  FETCHING_FISHES_FAILURE
} from "./actions";

const initialState = [];

export const reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case FETCHING_FISHES_START:
      return {
        <div>
        {species: action.payload}
        </div>
        // photo: action.payload,
        // species: action.payload,
        // description: action.payload,
        // quantity: action.payload,
        // location: action.payload,
        // isFetching: true,
        // error: ""
      };

    case FETCHING_FISHES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        // photo: action.payload,
        species: action.payload,
        description: action.payload,
        quantity: action.payload,
        location: action.payload,
        error: ""
      };
    case FETCHING_FISHES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: ""
      };
    default:
      return state;
  }
};
