import React from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";

export const DeleteAlert = () => {
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Deletar Agendamento?</p>
          <br />
          <div class="row buttons-area">
            <Link to="/scheduling">
              <button className="alerts-button">Sim </button>
            </Link>
            <Link to="/scheduling">
              <button className="alerts-button">Não </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteAlert;
