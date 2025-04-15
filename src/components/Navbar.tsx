import styles from "@/styles/Navbar.module.css";
import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => (
  <BSNavbar className={styles.customNavbar} variant="dark" expand="lg">
    <Container>
      <BSNavbar.Brand as={Link} to="/">
        Povos Indígenas
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Início
          </Nav.Link>
          <Nav.Link as={Link} to="/cultura">
            Cultura
          </Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
