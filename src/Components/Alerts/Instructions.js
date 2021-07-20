import {React, useEffect, useState} from "react";
import "./Alerts.css";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

export const Instructions = () => {
  const { id } = useParams();
  const history = useHistory();
  const [questionnaire, setQuestionnaire] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:9002/questionnaires/${id}`).then((response) => {
      setQuestionnaire(response.data);
      console.log(response.data);
    });
  }, []);


  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>{questionnaire.title}</p>
          <br />
          <h5>
            {questionnaire.instuctions}
          </h5>
          <br/>
          <h5>Número de questões: {questionnaire.questionsQuantity}</h5>


          <div className="row buttons-area">
            <Link to={`/questionnaires/new/${id}`}>
              <button className="alerts-button">Iniciar </button>
            </Link>
            <Link to="/questionnaires">
              <button className="alerts-button" onClick={() => history.goBack()}>Cancelar </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Instructions;
