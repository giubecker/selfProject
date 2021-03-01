import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../Store/Context';
import UIButton from '../Login/UIButton';
import * as FaIcons from 'react-icons/fa';

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/home');
    }

    setError(error);
    setValues(initialState);
  }

  return (
   <div className="container-login">
      <div className="box-login">
     <div align="center">
     <h1 className="title">SELF</h1>
     <h4 className='login-window-text'>Digite seu usuário e senha para prosseguir</h4>
      <form onSubmit={onSubmit}>
<div className="inputs">
<div className="user-login__form-control">
          <label htmlFor="user">Usuário</label><br/>
           <FaIcons.FaUser/>
          <input
          className="form"
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
        <label htmlFor="password">Senha</label> <br/>
        <FaIcons.FaKey/>
         
          <input
          className="form"
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
</div>
        {error && (
          <div className="error">{error}</div>
        )}
<div className="buttons">
<UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
        <button
        className="button">Cancelar</button>
</div>
      </form>
     </div>
    </div>
   </div>
  );
};

export default UserLogin;
