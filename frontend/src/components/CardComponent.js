import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import games from "../images/categories/games-category.png";
import monitors from "../images/categories/monitors-category.png";
import tablets from "../images/categories/tablets-category.png";
const CardComponent = ({ category, index }) => {
  const images = [
    games,
    monitors,
    tablets,
    games,
    monitors,
    tablets,
    games,
    monitors,
  ];

  return (
    <>
      <Card style={{ width: "50%" }}>
        <Card.Img crossorigin="anonymous" variant="top" src={images[index]} />
        <Card.Body>
          <Card.Title>category</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/products">
            <Button variant="primary">Go to {category}</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardComponent;
