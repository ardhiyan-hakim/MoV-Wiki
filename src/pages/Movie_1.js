import React from "react";
import Miracle from "../assets/Miracle.jpg";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function Movie_1() {
  return (
    <>
      <NavbarComponent />
      
      <div className="wrapper">
        <div className="content-header">
          <div className="content-header-image">
            <Image src={Miracle} alt="" className="images" />
          </div>
          <div className="content-header-title">
            <Card.Title className="text-center">
              Miracle in Cell No. 7
            </Card.Title>
            <Card.Text className="text-center">
              Rating : 4.9 <AiFillStar color="#F7B000" className="icon" />
            </Card.Text>
          </div>
        </div>
        <div className="content-body">
          <div className="content-body-genre">
            <Card.Title>Genre :</Card.Title> <p>Drama/Komedi</p>
          </div>
          <div className="content-body-actor">
            <Card.Title>Actor : </Card.Title>{" "}
            <p>
              Vino G. Bastian,Graciella Abigail,Mawar Eva de Jongh, Indro
              Warkop, Tora Sudiro, Rigen Rakelna, Indra Jegel, Bryan Domani,
              Denny Sumargo, Agla Artalidia, Marsha Timothy,Agoes Kencrot, Coki
              Pardede, Rifnu Wikana, Iedil Dzuhrie Alaudin, Nadila Ernesta,
              Makayla Rose, Sheila Dara Aisha, Yatti Surachman,
            </p>
          </div>
          <div className="content-body-director">
            <Card.Title>Director :</Card.Title> <p>Hanung Bramantyo</p>
          </div>
          <div className="content-body-sinopsis">
            <Card.Title>Sinopsis :</Card.Title>{" "}
            <p>
              Dodo (Vino G. Bastian) hanya ingin menjadi ayah yang baik bagi
              anaknya, Kartika (Graciella Abigail/Mawar de Jongh), sekalipun ia
              memiliki keterbatasan dalam hal kecerdasan, sehingga ia bertingkah
              dan berperilaku seperti anak-anak. Pada kenyataannya, Kartikalah
              yang lebih sering menjaga dan merawat sang ayah. Keduanya hidup
              bahagia. Kartika bangga pada ayahnya yang sehari-hari berjualan
              balon. Akan tetapi, kebahagiaan mereka tidak berlangsung lama,
              karena keduanya harus dipisahkan. Dodo ditangkap atas tuduhan
              memperkosa dan membunuh gadis kecil bernama Melati (Makayla Rose).
              Dodo dimasukkan ke penjara, lebih tepatnya ke dalam sel nomor
              tujuh, yang dihuni oleh napi-napi beringas, seperti Japra (Indro
              Warkop), Jaki (Tora Sudiro), Yunus (Rigen Rakelna), Atmo (Indra
              Jegel), dan Asrul (Bryan Domani). Setelah berbagai peristiwa yang
              dialami Dodo di penjara, Dodo berhasil mendapatkan bantuan untuk
              menyelundupkan Kartika ke dalam selnya. Kedekatan Dodo dan Kartika
              menularkan kebahagiaan bagi napi dan sipir lain di dalam penjara.
              Mereka mulai ragu apakah pria penyayang seperti Dodo tega membunuh
              Melati.
            </p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default Movie_1;
