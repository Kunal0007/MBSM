import React from "react";
import Carousel from "react-bootstrap/Carousel";
import publication from "../../assets/images/publication.jpeg";
import research from "../../assets/images/research.jpeg";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://bsmbharat.org/wp-content/uploads/2021/02/banner5-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={publication} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={research} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
