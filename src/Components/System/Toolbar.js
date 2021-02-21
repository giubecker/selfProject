import React from 'react'
import {Link} from 'react-router-dom';

export const Toolbar = () => {
    return (
        <div>
                    <nav>
          <ul>
          <li>
              <Link to="/home">Início</Link>
            </li>
            <li>
              <Link to="/protocols">Protocolos</Link>
            </li>
            <li>
              <Link to="/notifications">Notificações</Link>
            </li>
            <li>
              <Link to="/graphics">Gráficos de Evolução</Link>
            </li>
            <li>
              <Link to="/recipes">Receitas</Link>
            </li>
            <li>
              <Link to="/questionnaires">Questionários</Link>
            </li>
            <li>
              <Link to="/contacts">Equipe & Médicos</Link>
            </li>
            <li>
              <Link to="/library">Material Didático</Link>
            </li>
            <li>
              <Link to="/booking">Agendamentos</Link>
            </li>
            <li>
              <Link to="/achievements">Conquistas</Link>
            </li>
            <li>
              <Link to="/doubts">Dúvidas Frequentes</Link>
            </li>
            <li>
              <Link to="/profile">Meu Perfil</Link>
            </li>
            <li>
              <Link to="/login">Sair</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
export default Toolbar;