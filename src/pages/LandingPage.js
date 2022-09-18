import "../styles/pages/LandingPage.css";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage({ users, isLogin, setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);

    if (isLogin === true) {
      navigate("/");
    }

    console.log(isLogin);
  });

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

            const filtered = users.filter(
              (user) => user.username === email.email
            );

            if (filtered.length === 0) {
              alert("Tidak ada username tersebut pada database !");
              return false;
            }

            if (password.password !== confirmPassword.confirmPassword) {
              alert("Password dan Confirm Password tidak sesuai");
              return false;
            }

            if (password.password !== filtered[0].password) {
              alert("Password yang anda berikan salah");
              return false;
            }

            setIsLogin(() => true);
          }}
        >
          <h2>Login</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
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
            <Form.Label>Password</Form.Label>
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
