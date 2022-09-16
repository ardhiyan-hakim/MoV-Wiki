import React from "react";
import Topgun from "../assets/Topgun.jpg";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function Movie_5() {
  return (
    <>
      <NavbarComponent />

      <div className="wrapper">
        <div className="content-header">
          <div className="content-header-image">
            <Image src={Topgun} alt="" className="images" />
          </div>
          <div className="content-header-title">
            <Card.Title className="text-center">Top Gun : Maverick</Card.Title>
            <Card.Text className="text-center">
              Rating : 4.5 <AiFillStar color="#F7B000" className="icon" />
            </Card.Text>
          </div>
        </div>
        <div className="content-body">
          <div className="content-body-genre">
            <Card.Title>Genre :</Card.Title> <p>Action / Drama</p>
          </div>
          <div className="content-body-actor">
            <Card.Title>Actor : </Card.Title>{" "}
            <p>Tom Cruise , Jennifer Connely , Miles Teller</p>
          </div>
          <div className="content-body-director">
            <Card.Title>Director :</Card.Title> <p>Joseph Kosinski</p>
          </div>
          <div className="content-body-sinopsis">
            <Card.Title>Sinopsis :</Card.Title>{" "}
            <p>
              Lebih dari 30 tahun mengabdi sebagai salah satu penerbang Angkatan
              Laut terbaik, Pete “Maverick” Mitchell berada dalam posisi
              dambaannya, melakukan aksi-aksi mendobrak sebagai pilot uji nan
              pemberani, dan menampik setiap kesempatan naik pangkat karena akan
              membuatnya tak bisa menerbangkan pesawatnya.
            </p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default Movie_5;
