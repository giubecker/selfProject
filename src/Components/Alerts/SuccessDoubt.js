import React from "react";
import "./Alerts.css";
import { useHistory } from "react-router-dom";

export const SuccessDoubt = () => {
  const history = useHistory();
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Dúvida enviada!</p>
          <br />
          <div className="row buttons-area">
            <button onClick={() => history.goBack()} className="alerts-button">
              Ok{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuccessDoubt;
