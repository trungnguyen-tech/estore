import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCarousel = () => {
  const customSize = {
    margin: '0 auto',
  };
  return (
    <div style={customSize}>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(60)/H1_1440x242_c67d1b189f.png"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(60)/H1_1440x242_8c4106d31f.png"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(60)/H1_1440x242_c5f40cbb4e.png"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
