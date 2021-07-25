import React, { useState, useEffect } from "react";
import "./Alerts.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export const DeleteAlert = () => {
  const { id } = useParams();
  const history = useHistory();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9002/reserved/${id}`).then((response) => {
      setSchedule(response.data);
    });
  }, []);

  return (
    <>
      <div className="container-alert">
        <div className="box-alert">
          <p>Deletar Agendamento?</p>
          <br />
          <div className="row buttons-area">
            <button
              className="alerts-button"
              onClick={() =>
                axios
                  .delete(`http://localhost:9002/reserved/${schedule.id}`)
                  .then((response) => {
                    history.push("/scheduling/successdelete");
                  })
              }
            >
              Sim
            </button>
            <button className="alerts-button" onClick={() => history.goBack()}>
              Não{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteAlert;
