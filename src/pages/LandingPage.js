import "../styles/pages/LandingPage.css";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setUsername } from "../bootstrap/action";
import createInstance from "../bootstrap/api";

function LandingPage({ isLogin, setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");
  const { access_token, username } = useSelector((state) => state);

  const api = createInstance(5000, access_token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Set isLogin to Local Storage
    localStorage.setItem("isLogin", isLogin);

    if (isLogin === true && access_token) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("username", username);
      navigate("/");
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("username");
    }
  }, [isLogin, access_token, navigate, username]);

  return (
    <div className="landing-page">
      <div className="illustration">
        <div className="illustration-image">
          <div className="image-lp"></div>
        </div>
      </div>

      <div className="form">
        <Form
          onSubmit={(event) => {
            event.preventDefault();

            if (password.password !== confirmPassword.confirmPassword) {
              alert("Password dan Confirm Password tidak sesuai");
              return false;
            }

            api
              .post("/login", {
                username: email.email,
                password: password.password,
              })
              .then((res) => {
                dispatch(setAccessToken(res.data.access_token));
                dispatch(setUsername(email.email));
                setIsLogin(() => true);
              })
              .catch((err) => console.log(err.response.data))
          }}
        >
          <h2>Login</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Email"
              onChange={(event) => {
                setEmail((prev) => ({ ...prev, email: event.target.value }));
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your Password"
              onChange={(event) => {
                setPassword((prev) => ({
                  ...prev,
                  password: event.target.value,
                }));
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setConfirmPass((prev) => ({
                  ...prev,
                  confirmPassword: event.target.value,
                }));
              }}
            />
          </Form.Group>

          <div className="button-container">
            <button type="submit">Log In</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LandingPage;
