import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ModalsComponent from "./Modals";
import createInstance from "../bootstrap/api";
import { useSelector } from "react-redux";

function DetailMovie({ movie }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { access_token } = useSelector((state) => state);

  return (
    <>
      <div className="wrapper">
        <ModalsComponent
          show={show}
          handleClose={handleClose}
          method={"put"}
          movie={movie}
        />

        <div className="content-header">
          <div className="content-header-image">
            <Image src={movie.image} alt="" className="images" />
          </div>
          <div className="content-header-title">
            <Card.Title className="text-center">{movie.name}</Card.Title>
            <Card.Text className="text-center">
              Rating : {movie.description1}{" "}
              <AiFillStar color="#F7B000" className="icon" />
            </Card.Text>
          </div>
        </div>
        <div className="content-body">
          <div className="content-body-genre">
            <Card.Title>Genre :</Card.Title> <p>{movie.description2}</p>
          </div>
          <div className="content-body-actor">
            <Card.Title>Director : </Card.Title>
            <p>{movie.description3}</p>
          </div>
          <div className="content-body-director">
            <Card.Title>Actor :</Card.Title> <p>{movie.description4}</p>
          </div>
          <div className="content-body-sinopsis">
            <Card.Title>Sinopsis :</Card.Title>
            <p>{movie.description5}</p>
          </div>
          <div className="content-body-button">
            <button onClick={() => navigate(-1)}>
              <IoMdArrowRoundBack />
            </button>
            <button>
              <MdOutlineFavoriteBorder />
            </button>
            <button onClick={handleShow}>
              <HiPencil />
            </button>
            <button
              onClick={() => {
                const api = createInstance(3000, access_token);
                api
                  .delete(`/content/delete/${movie.id}`)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err))
                  .then(() => {
                    navigate("/movie");
                    alert("Data berhasil dihapus");
                  });
              }}
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailMovie;
