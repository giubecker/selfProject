import React from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";

export const SuccessProfile = () => {
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Perfil editado com sucesso!</p>
          <br />
          <div className="row buttons-area">
          <Link to="/profile">
            <button className="alerts-button">Ok </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
export default SuccessProfile;
