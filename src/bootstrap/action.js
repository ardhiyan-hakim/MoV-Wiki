function setName(payload) {
  return {
    type: "SET_NAME",
    payload: payload,
  };
}

function setUser(payload) {
  return {
    type: "SET_USER",
    payload: payload,
  };
}

function setMovies(payload) {
  return {
    type: "SET_MOVIES",
    payload: payload,
  };
}

function setAccessToken(payload) {
  console.log(payload)
  return {
    type: "SET_AUTH",
    payload: payload,
  };
}

export { setName, setUser, setMovies, setAccessToken };
