import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="topBar">
      <div className=" pt-2">
        <Navbar collapseOnSelect expand="lg ">
          <NavLink className="navbar-brand menu-item " to="/">
            Jahid Hasan
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="menu-item" to="/">
                Home
              </NavLink>
              <NavLink className="menu-item" to="/about">
                About me
              </NavLink>
              <NavLink className="menu-item" to="/projects">
                Project
              </NavLink>
              <NavLink className="menu-item" to="/blog">
                Blog
              </NavLink>
              <NavLink className="menu-item" to="/contact">
                Contact
              </NavLink>

              <a
                className="menu-item"
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/10iErbm1XtXUGZEZ62OnkKV556TWLROlT/view?usp=sharing"
              >
                Resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default TopBar;
