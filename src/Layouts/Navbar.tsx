import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";


const NavBar = () => {
  return (

    <div className='sticky-top py-2 nav-area'>
      <div className='nav-container'>
        <Navbar  expand="lg" variant='dark'>
          <Container fluid>
        <Navbar.Brand href="/" className='text-primary fs-2 fw-bolder mx-5'>Face<span className='text-primary'>book</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
        <Navbar.Collapse id="navbarScroll" className=' d-lg-flex justify-content-between'>
          <Nav
            className="me-auto mx-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className=' fw-bold  fs-5 nav-font mx-1 hover'>Home</Nav.Link>
          </Nav>
          <div className='d-flex  align-items-center main-btn'>
          <button className='btn submit_btn'><Link to={"/login"} className="text-decoration-none text-light ">Logout</Link></button>
          </div>
        </Navbar.Collapse>
      </Container>
        </Navbar>
      </div>
    </div>
  );
};


export default NavBar;







// import React from 'react';

// const Navbar = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Navbar;