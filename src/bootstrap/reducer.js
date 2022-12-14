import initialState from "./initialState";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };

    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };

    case "SET_MOVIE":
      console.log(action.payload);
      return {
        ...state,
        movies: action.payload
      };

    case "SET_AUTH":
      return {
        ...state,
        access_token: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
