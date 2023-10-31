import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CUBO indumentaria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Promociones</Nav.Link>
            <Nav.Link href="#link">Pantalones</Nav.Link>
            <NavDropdown title="Remeras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blanco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Negro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Color</NavDropdown.Item>

              </NavDropdown>
             
          </Nav>
          <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;