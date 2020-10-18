import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, TabContent, TabPane, Nav, NavItem, Card, Button, CardTitle, CardText, Row, Col, Collapse } from 'reactstrap';
import classnames from 'classnames';
import './Header.css';
import{NavLink} from 'react-router-dom';

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
            <NavLink className="nav-link" to="/home">Home</NavLink>
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