import React from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";

export const ExitAlert = () => {
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Deseja sair?</p>
          <br />
          <div class="row">

          <Link to="/login">
            <button className="questionnaire-button">Sim </button>
          </Link>
          <Link to="/scheduling/schedule/3">
            <button className="questionnaire-button">Não </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
export default ExitAlert;
