import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import carousel1 from "../images/carousel/carousel-1.png";
import carousel2 from "../images/carousel/carousel-2.png";
import carousel3 from "../images/carousel/carousel-3.png";

const ProductCarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          src={carousel1}
          style={{ height: "300px", objectFit: "cover", width: "100%" }}
        />
        <Carousel.Caption>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            to="/product-details/1"
          >
            <h3>Laptop Bestseller</h3>
          </Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={carousel2}
          style={{ height: "300px", objectFit: "cover", width: "100%" }}
        />
        <Carousel.Caption>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            to="/product-details/1"
          >
            <h3>Books Bestseller</h3>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={carousel3}
          style={{ height: "300px", objectFit: "cover", width: "100%" }}
        />
        <Carousel.Caption>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            to="/product-details/1"
          >
            <h3>Camera Bestseller</h3>
          </Link>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
