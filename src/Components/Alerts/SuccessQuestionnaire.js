import React from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";

export const SuccessQuestionnaire = () => {
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Questionário respondido com sucesso!</p>
          <br />
          <div className="row buttons-area">
          <Link to="/questionnaires">
            <button className="alerts-button">Ok </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
export default SuccessQuestionnaire;
