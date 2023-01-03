import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"

function Header() {
  return (
    <Navbar className='text-light' fixed='top' collapseOnSelect expand="lg" style={{backgroundColor: '#33383b'}}  variant="">
      <Container className='text-light'>
        <Navbar.Brand href="#home" className='text-light brand'>INTERIOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className=' bg-success' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light  n' href="#features">Home</Nav.Link>
            <Nav.Link className='text-light n' href="#pricing">Services</Nav.Link>
            <Nav.Link className='text-light n' href="#pricing">About Us</Nav.Link>
            <Nav.Link className='text-light n' href="#pricing">Team</Nav.Link>
            <Nav.Link className='text-light n' href="#pricing">Gallery</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;