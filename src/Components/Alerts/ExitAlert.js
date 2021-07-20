import React from "react";
import "./Alerts.css";
import { Link, useHistory } from "react-router-dom";

export const ExitAlert = () => {
  const history = useHistory();
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Deseja sair?</p>
          <br />
          <div className="row buttons-area">
            <Link to="/">
              <button className="alerts-button">Sim </button>
            </Link>
            <button className="alerts-button" onClick={() => history.goBack()}>
              Não{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExitAlert;
