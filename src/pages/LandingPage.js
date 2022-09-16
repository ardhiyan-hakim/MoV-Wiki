import "../styles/pages/LandingPage.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");
  // const [visible, setVisible] = useState(true);

  return (
    <div className="landing-page">
      <div className="illustration">
        <div className="illustration-image">
          <div className="image-lp"></div>
        </div>
      </div>

      <div className="form">
        <Form>
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
            <Form.Text className="text-muted {visible ? show : hide}">
              Your password does not match the confirm input.
            </Form.Text>
          </Form.Group>

          <div className="button-container">
            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Log In
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LandingPage;
