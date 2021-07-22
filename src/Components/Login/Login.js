import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../Store/Context";
import UIButton from "./UIButton";
import * as FaIcons from "react-icons/fa";
import "./Login.css";

function initialState() {
  return { user: "", password: "" };
}

function login({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const { token, error } = login(values);
    if (token) {
      setToken(token);
      setLoading(false);
      return history.push("/home"); 
    }
    setError(error);
    setValues(initialState);
    setLoading(false);
  }

  return (
    <div className="container-login">
      <div className="box-login">
        <div align="center">
          <h4 className="title">Bem-vindo!</h4>
          <h5 className="login-window-text">
            Digite seu usuário e senha para prosseguir
          </h5>
          <form onSubmit={onSubmit}>
            <div className="inputs">
              <div className="user-login__form-control">
                <label htmlFor="user">Usuário</label>
                <br />
                <div className="input-row">
                  <FaIcons.FaUser />
                  <input
                    className="form-login"
                    id="user"
                    type="text"
                    name="user"
                    onChange={onChange}
                    value={values.user}
                  />
                </div>
              </div>
              <div className="user-login__form-control">
                <label htmlFor="password">Senha</label> <br />
                <div className="input-row">
                  <FaIcons.FaKey />
                  <input
                    className="form-login"
                    id="password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={values.password}
                  />
                </div>
              </div>
            </div>
            {error && <div className="error">{error}</div>}
            <div className="buttons-login row">
              {loading ? (
                "Carregando..."
              ) : (
                <>
                  <UIButton
                    type="submit"
                    theme="contained-green"
                    className="user-login__submit-button"
                    rounded
                  >
                    Entrar
                  </UIButton>
                  <button className="button">Cancelar</button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
