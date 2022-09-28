import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useSelector } from "react-redux";
import createInstance from "../bootstrap/api";
import { useNavigate } from "react-router-dom";

function createObject(
  title,
  rating,
  image,
  genre,
  director,
  actor,
  description
) {
  return {
    name: title.title,
    image: image.image,
    description1: rating.rating,
    description2: genre.genre,
    description3: director.director,
    description4: actor.actor,
    description5: description.description,
  };
}

function ModalsComponent({ show, handleClose, method }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const { access_token } = useSelector((state) => state);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder=""
              autoFocus
              onChange={(event) => {
                setTitle((prev) => ({
                  ...prev,
                  title: event.target.value,
                }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              placeholder=""
              autoFocus
              onChange={(event) => {
                setRating((prev) => ({
                  ...prev,
                  rating: event.target.value,
                }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder=""
              autoFocus
              onChange={(event) => {
                setImage((prev) => ({
                  ...prev,
                  image: event.target.value,
                }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              placeholder=""
              autoFocus
              onChange={(event) => {
                setGenre((prev) => ({
                  ...prev,
                  genre: event.target.value,
                }));
              }}
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            ></Form.Group>
            <Form.Label>Director</Form.Label>
            <Form.Control
              placeholder=""
              autoFocus
              onChange={(event) => {
                setDirector((prev) => ({
                  ...prev,
                  director: event.target.value,
                }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Actor</Form.Label>
            <Form.Control
              placeholder=""
              autoFocus
              onChange={(event) => {
                setActor((prev) => ({
                  ...prev,
                  actor: event.target.value,
                }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(event) => {
                setDescription((prev) => ({
                  ...prev,
                  description: event.target.value,
                }));
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          className="submit-button"
          onClick={() => {
            handleClose();
            const newObj = createObject(
              title,
              rating,
              image,
              genre,
              director,
              actor,
              description
            );

            navigate('/movie');
            if (method === "post") {
              // axios.post
              const api = createInstance(5000, access_token);
              api
                .post("/content/create", newObj)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err));
            } else if (method === "put") {
              // axios.put
            }
          }}
        >
          Submit
        </button>
        <button
          className="cancel-button"
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalsComponent;
