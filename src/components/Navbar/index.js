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
        <img src="../Imgs/logo.jpg"/>
        <NavLink to='/' activeStyle={{fontFamily:'Avantgarde', fontSize:'25px'}}>
        Warden
        </NavLink>
        <Bars />
        <NavMenu>
        
              
          <NavLink to='/catalogo' activeStyle>
            Catalogo
          </NavLink>
          <NavLink to='/empresas' activeStyle>
            Empresas
          </NavLink>
          <NavLink to='/contato' activeStyle>
            Contato
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
