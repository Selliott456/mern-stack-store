import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CardComponent from "../components/CardComponent";
import { Row, Container } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Books",
    "Videos",
  ];

  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={4} className="g-4 mt-5 ">
          {categories.map((category, index) => (
            <CardComponent category={category} index={index} key={index} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
