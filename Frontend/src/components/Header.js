import React from 'react';

import {Navbar, Container, Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/' className='text-dark'>App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
