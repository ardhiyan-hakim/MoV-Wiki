import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createInstance from "../bootstrap/api";
import { useNavigate } from "react-router-dom";
import { setMovie } from "../bootstrap/action";

function ModalsComponent({ show, handleClose, method, movie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [description, setDescription] = useState("");

  const { movies, access_token } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {method === "post" ? "Add Movie" : "Edit Movie"}
        </Modal.Title>
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
            const newObj = {
              title: title.title,
              rating: rating.rating,
              image: image.image,
              genre: genre.genre,
              director: director.director,
              actor: actor.actor,
              description: description.description,
            };

            for (let item in newObj) {
              if (newObj[item] === undefined) {
                alert(`Harap untuk mengisi ${item} terlebih dahulu!`);
                return false;
              }
            }

            const newData = createObject(newObj);

            if (method === "post") {
              navigate("/movie");
              // axios.post
              const api = createInstance(5000, access_token);
              api
                .post("/content/create", newData)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err))
                .then(() => handleClose());
            } else if (method === "put") {
              const newMovies = editMovie(movies, movie.id, newData);
              dispatch(setMovie(newMovies));

              // axios.put
              const api = createInstance(5000, access_token);
              api
                .put(`/content/update/${movie.id}`, newData)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                .then(() => handleClose());
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

function createObject({
  title,
  rating,
  image,
  genre,
  director,
  actor,
  description,
}) {
  return {
    name: title,
    image: image,
    description1: rating,
    description2: genre,
    description3: director,
    description4: actor,
    description5: description,
  };
}

function editMovie(movies, id, newData) {
  const currMovies = movies.filter((movie) => movie.id !== id);
  newData.id = id;
  currMovies.push(newData);

  return currMovies;
}

export default ModalsComponent;
