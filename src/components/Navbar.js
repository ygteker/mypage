import { React, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Fragment>
      <Navbar sticky='top' variant='dark'>
        <Container>
          <Nav className='m-auto'>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
            <Nav.Link href='#resume'>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
