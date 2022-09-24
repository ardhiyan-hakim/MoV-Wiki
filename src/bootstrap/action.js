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

export { setName, setUser };
