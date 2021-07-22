import React from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";

export const SuccessEdit = () => {
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Editado com sucesso!</p>
          <br />
          <div className="row buttons-area">
          <Link to="/scheduling">
            <button className="alerts-button">Ok </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
export default SuccessEdit;
