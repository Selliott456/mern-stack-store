import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link as={Link} to="/">
          <Navbar.Brand href="/">Shop</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="all">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
              </DropdownButton>

              <Form.Control type="text" placeholder="Search for products" />
              <Button variant="warning">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/admin/orders">
              Admin
              <span className="position-absolute top-1 start-10 translate-middle p2 bg-danger border border-light rounded-circle"></span>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                eventKey="user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="user" as={Link} to="/user">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                register
              </Nav.Link>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">
              <Badge pill bg="danger">
                2
              </Badge>
              <i className="bi bi-cart-dash"></i>
              <span className="ms-1"></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
