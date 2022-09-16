import React from "react";
import Pinocchio from "../assets/Pinocchio.jpg";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function Movie_4() {
  return (
    <>
      <NavbarComponent />
      
      <div className="wrapper">
        <div className="content-header">
          <div className="content-header-image">
            <Image src={Pinocchio} alt="" className="images" />
          </div>
          <div className="content-header-title">
            <Card.Title className="text-center">Pinocchio</Card.Title>
            <Card.Text className="text-center">
              Rating : 4.6 <AiFillStar color="#F7B000" className="icon" />
            </Card.Text>
          </div>
        </div>
        <div className="content-body">
          <div className="content-body-genre">
            <Card.Title>Genre :</Card.Title>{" "}
            <p>Adventure/Comedy/Drama/Family</p>
          </div>
          <div className="content-body-actor">
            <Card.Title>Actor : </Card.Title>

            <p>Pinokio</p>
          </div>
          <div className="content-body-director">
            <Card.Title>Director :</Card.Title> <p>Robert Zemeckis</p>
          </div>
          <div className="content-body-sinopsis">
            <Card.Title>Sinopsis :</Card.Title>
            <p>
              Sebuah boneka dihidupkan oleh seorang peri, yang menugaskannya
              untuk menjalani kehidupan yang bajik untuk menjadi anak laki-laki
              sejati.
            </p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default Movie_4;
