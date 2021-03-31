import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Self } from "../../assets/logo.svg";
import Logo from "../../assets/icone.png";
import { UserContext } from "../../UserContext";

export const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className="header">
      <nav className="nav container">
        {/* <div className='logo'>
  <Self/>
</div> */}
        <div className="logo">
          <img className="logo" src={Logo} alt="Logo SELF" />
        </div>
        <div>{data && data.email}</div>
        <div className="links container">
          <NavLink to="/about">Sobre</NavLink>

          <Link to="/team">Equipe</Link>

          <Link to="/plans">Protocolos</Link>

          <Link to="/blog">Blog</Link>

          <Link to="/contact">Contato</Link>

          <Link to="/login">Acesso</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
