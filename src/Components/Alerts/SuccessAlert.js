import React from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";

export const SuccessAlert = () => {
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Agendado com sucesso!</p>
          <br />
          <div className="row">
          <Link to="/scheduling">
            <button className="questionnaire-button">Ok </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
export default SuccessAlert;
