import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/800/400"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/801/400"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/802/400"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
