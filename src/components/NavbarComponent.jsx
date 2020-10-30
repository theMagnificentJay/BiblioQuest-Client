import React, { useState } from 'react';
import LoginModal from './LoginModal';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md" className="nav-fill w-100">
      <NavbarBrand href="/" className="ml-auto">BiblioQuest</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <LoginModal />
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default NavbarComponent;
