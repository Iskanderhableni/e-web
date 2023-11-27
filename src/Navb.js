import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.jpg'
import navb from'./navb.css'
import { NavLink } from 'react-bootstrap';

function Navb() {
  return (
    <Navbar expand="lg" className='bg-light' >
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-5 ">
            <Nav.Link href='#Accueil' className='nav-link-with-hover2'>Accueil</Nav.Link>
            <Nav.Link href="#Produits" className='ms-3 nav-link-with-hover1' >Produits</Nav.Link>
            <Nav.Link href="#Poterie" className=" ms-3 nav-link-with-hover2">Poterie Yosart</Nav.Link>
            <Nav.Link href="#Contact" className="ms-3 nav-link-with-hover3">Contact</Nav.Link>
            <Nav.Link href="https://www.instagram.com/yosart_ceramic/"  className=""> 
            <i class="fab fa-2x fa-instagram instagram-hover" ></i>
            </Nav.Link>
            
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb