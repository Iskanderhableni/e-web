import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.jpg'
import navb from'./navb.css'
import { NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

function Navb() {
 /*const [show , handleshow] = useState(false)
  const transitionnavbar=()=>{
    if(window.scrollY>50){
      handleshow(true)
    }else{
      handleshow(false)
    }
  };
  useEffect(()=>{
    window.addEventListener("scroll",transitionnavbar);
    return()=>window.removeEventListener("scroll",transitionnavbar);
  },[]);*/
  return (
    <Navbar expand="lg" /*className={`nav ${show && "nav_color-transition"}`} style={{ zIndex: 1000 }}*/>
      <Container>
        <Navbar.Brand >
          
        <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-5">
            <Nav.Link as={Link} to='/' className='ms-3 nav-link-with-hover2'>
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to='/produits' className='ms-3 nav-link-with-hover1'>
              Produits
            </Nav.Link>
            <Nav.Link as={Link} to='/poterie' className="ms-3 nav-link-with-hover2">
              Poterie Yosart
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' className="ms-3 nav-link-with-hover3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb