import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler,  NavItem,NavLink, Collapse } from 'reactstrap';
import './Header.css';


const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand id="brand" href="/"><img className="logo" src="../skillpill.png" />SkillPill</NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Contact</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;