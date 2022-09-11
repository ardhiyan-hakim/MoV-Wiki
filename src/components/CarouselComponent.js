import Carousel from "react-bootstrap/Carousel";

import "../styles/layouts/Carousel.css";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.unchartedmovie.com/images/share.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Uncharted</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/film-taken-34.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Taken 3</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.nawpic.com/media/2020/top-gun-maverick-nawpic-7.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Top Gun</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
