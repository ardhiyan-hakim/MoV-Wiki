function setUsername(payload) {
  return {
    type: "SET_USERNAME",
    payload: payload,
  };
}

function setMovies(payload) {
  return {
    type: "SET_MOVIES",
    payload: payload,
  };
}

function setMovie(payload) {
  return {
    type: "SET_MOVIE",
    payload: payload,
  }
}

function setAccessToken(payload) {
  console.log(payload)
  return {
    type: "SET_AUTH",
    payload: payload,
  };
}

export { setUsername, setMovies, setMovie, setAccessToken };
