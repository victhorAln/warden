import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        Inicio
        </NavLink>
        <Bars />
        <NavMenu>
        
              
          <NavLink to='/empresas' activeStyle>
            Empresas
          </NavLink>
          <NavLink to='/services' activeStyle>
            Serviços
          </NavLink>
          <NavLink to='/contato' activeStyle>
            Contato
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
