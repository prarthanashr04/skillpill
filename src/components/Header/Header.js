import React, { useState } from 'react';

import './Header.css';

import { Navbar, NavbarBrand, NavbarToggler,  NavItem,NavLink, Collapse } from 'reactstrap';
import './Header.css';



const Header = (props) => {
  //const [activeTab, setActiveTab] = useState('1');

  // const toggle = tab => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // }
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand id="brand" href="/"><img className="logo" alt="" src="./skillpill.png" />SkillPill</NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <NavItem>
            <NavLink id="nl"  onClick = {() => {props.home(); toggleNav();}}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="nl" onClick = {() => {props.aboutus(); toggleNav();}}>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="nl" onClick = {() => {props.works(); toggleNav();}}>Works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="nl" onClick = {() => {props.contact(); toggleNav();}}>Contact</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
