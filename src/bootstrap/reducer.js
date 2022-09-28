import initialState from "./initialState";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "SET_USER":
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
      };

    case "SET_MOVIES":
      console.log(action.payload);
      return {
        ...state,
        movies: action.payload.movies,
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
