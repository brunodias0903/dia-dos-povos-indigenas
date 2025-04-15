import styles from "@/styles/Navbar.module.css";

import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";
import { FaFeatherAlt, FaHome, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => (
  <BSNavbar className={styles.customNavbar} variant="dark" expand="lg">
    <Container>
      <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <FaLeaf className="me-2" size={18} />
        Povos Indígenas
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-3">
          <Nav.Link as={Link} to="/" className="d-flex align-items-center">
            <FaHome className="me-2" size={18} />
            Início
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/cultura"
            className="d-flex align-items-center"
          >
            <FaFeatherAlt className="me-2" size={18} />
            Cultura
          </Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
