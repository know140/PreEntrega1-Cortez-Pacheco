import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const NavBarComponent = () => {
  const logoStyle = {
    width: '150px',
    height: 'auto',
  };

  const navLinkStyle = {
    fontSize: '1.5rem',
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src="img/logo.jpg" alt="Logo de CUBO indumentaria" style={logoStyle} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={navLinkStyle}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={navLinkStyle}>
              Pantalones
            </Nav.Link>
            <NavDropdown title="Categorias" style={navLinkStyle} id="basic-nav-dropdown">
  <NavDropdown.Item>
    <Link to="/category/blanco" style={{ textDecoration: "none", color: "black" }}>
      Categoria 1
    </Link>
  </NavDropdown.Item>

  <NavDropdown.Item>
    <Link to="/category/negro" style={{ textDecoration: "none", color: "black" }}>
      Categoria 2
    </Link>
  </NavDropdown.Item>

  <NavDropdown.Item>
    <Link to="/category/color" style={{ textDecoration: "none", color: "black" }}>
      Categoria 3
    </Link>
  </NavDropdown.Item>
</NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
