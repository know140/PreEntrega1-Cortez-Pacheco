import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import Image from 'react-bootstrap/Image'; 

const NavBarComponent = () => {

  const logoStyle = {
    width: '150px', 
    height: 'auto', 
   
  };
  const navLinkStyle = {
    fontSize: '1.5rem',
   
  };

  const navDropdownStyle = {
    fontSize: '1.5rem', 
    
  };

  return (

    
    <Navbar  expand="lg" className="bg-body-tertiary">
      
      <Container>

        <Navbar.Brand href="#home">

        <Image src="img/logo.jpg" alt="Logo de CUBO indumentaria" style={logoStyle} />
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={navLinkStyle}>Promociones</Nav.Link>
            <Nav.Link href="#link" style={navLinkStyle}>Pantalones</Nav.Link>
            <NavDropdown title="Remeras"  style={navLinkStyle} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={navDropdownStyle}>Blanco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={navDropdownStyle}>Negro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={navDropdownStyle}>Color</NavDropdown.Item>

              </NavDropdown>
             
          </Nav>
          <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;