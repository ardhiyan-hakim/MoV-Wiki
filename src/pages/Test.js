import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import { useDispatch, useSelector } from "react-redux";

function Test() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  return (
    <>
      <NavbarComponent />
      <h1>Hai Cintaku</h1>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>

      <button
        onClick={() => {
          console.log(data);
          dispatch({ type: "SET_NAME", payload: "Ardhiyan" });
        }}
      >
        Change Name
      </button>

      <button
        onClick={() => {
          console.log(data);
          dispatch({
            type: "SET_USER",
            payload: { name: "Asep", age: 19 },
          });
        }}
      >
        Change Identity
      </button>
      <FooterComponent />
    </>
  );
}

export default Test;
