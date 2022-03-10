/* eslint-disable import/no-unresolved */
import { Link } from 'react-router-dom';
import { iconMenu, iconMenuClose } from '../../assets/icons';
import { NavProps } from '../../interfaces/nav.interface';
import { Button } from '../common/Button/styled.button';
import { Nav, NavBrand, NavLinks } from './nav.styled';

const Navbar = ({ isOpen, showNav } :NavProps) => (
  <>
    <Nav isOpen={!isOpen}>
      <NavBrand>
        <NavLinks>
          <Link onClick={() => showNav()} to="/">Home</Link>
        </NavLinks>
        <NavLinks>
          <Link onClick={() => showNav()} to="/dashboard">Dashboard</Link>
        </NavLinks>
      </NavBrand>
    </Nav>
    <Button
      type="button"
      onClick={() => showNav()}
      style={{
        position: 'absolute',
        padding: 0,
        width: '50px',
        height: '50px',
        top: '15px',
        right: '15px',
        zIndex: '1',
        backgroundColor: '#fff',
        borderRadius: '100%',
        color: '#000',
        boxShadow: '10px 10px 16px 0 #00000036',
      }}
    >
      {isOpen ? iconMenu : iconMenuClose }
    </Button>
  </>
);
export default Navbar;
