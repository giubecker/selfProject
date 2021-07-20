import React from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ExitQuestionnaire = () => {
  const { id } = useParams();
  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Deseja sair?</p>
          <br />
          <h5> Seu progresso será perdido</h5>
          <div className="row buttons-area">
            <Link to="/questionnaires">
              <button className="alerts-button">Sim </button>
            </Link>
            <Link to={`/questionnaires/new/${id}`}>
              <button className="alerts-button">Não </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExitQuestionnaire;
