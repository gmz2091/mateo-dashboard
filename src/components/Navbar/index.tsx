/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavProps } from '../../interfaces/nav.interface';
import { Nav, NavBrand, NavLinks } from './nav.styled';

const Navbar = ({ isOpen, showNav } :NavProps) => (
  <>
    <Nav isOpen={!isOpen}>
      <NavBrand>
        <NavLinks>
          <Link to="/">Home</Link>
        </NavLinks>
        <NavLinks>
          <Link to="/dashboard">Dashboard</Link>
        </NavLinks>
      </NavBrand>
    </Nav>
    <button
      type="button"
      onClick={() => showNav()}
      style={{ position: 'absolute', top: '0', right: '0' }}
    >
      Hide Menu

    </button>
  </>
);
export default Navbar;
