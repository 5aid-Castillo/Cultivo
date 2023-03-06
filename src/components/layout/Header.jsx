import React from 'react'
import '../../styles/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* import {NavLink} from 'react-router-dom'; */
import { HashLink } from 'react-router-hash-link';
/* import { HashLink } from 'react-router-hash-link' */

const Header = () => {
  /* const{setCliente} = useContext(Contexto);
  const{cliente} = useContext(Contexto);
  const cambio1 = () =>{
    setCliente(
        cliente.map((dato,index) => 
            index === 3
            ? {...dato,idioma:0}
            :{...dato}
        )
    );
}   */
  return (
    <>
        {/* <header className="header">
            <section className="container"> 
                <div className="logo">
                    <a href="index.html">Cultivo</a>
                </div>
            </section>
        </header> */}
        <header className='header'>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" className="navigation fixed-top" variant="dark">
      <Container>
        <Navbar.Brand className="logo" href="/">CULTIVO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            {/* <HashLink to="/">Inicio</HashLink> */}
            <HashLink to="../../views/Nosotros.jsx#nosotros">Nosotros</HashLink>
            <HashLink to="../../views/Galeria.jsx#galeria">Galeria</HashLink>
            <HashLink to="../../views/Home.jsx#contact">Contacto</HashLink>
            {/*  <HashLink to="../../views/Home.jsx#contact"></HashLink>  */}
            
              {/* <NavDropdown title="Idioma" id="collasible-nav-dropdown">
                <NavDropdown.Item > <Idiomas /> </NavDropdown.Item>
                <NavDropdown.Item >EN </NavDropdown.Item>
              
              </NavDropdown> */}
          </Nav>
          <Nav className="reserva">
            <HashLink to="../../views/Reservar.jsx#reservar">Reservar</HashLink>
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

    </>
  )
}

export default Header