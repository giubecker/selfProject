import React from 'react';
import {
Nav,
NavBtn,
NavLink,
NavBtnLink,
Bars,
NavMenu} from './NavbarData';

export const Navbar = () => {

    return(
        <>
        <Nav>
            <NavLink>
              LOGO
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to='/about' activeStyle>
                    Sobre
                </NavLink>
                <NavLink to='/about' activeStyle>
                    Protocolos
                </NavLink>
                <NavLink to='/about' activeStyle>
                    Equipe
                </NavLink>
                <NavLink to='/about' activeStyle>
                    Contato
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}
export default Navbar;