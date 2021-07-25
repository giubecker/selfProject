import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";

export const Scheduled = () => {
  const initialValue = {
    type: "",
    date: "",
    hour: "",
    notes: "",
  };
  const { id } = useParams();
  const history = useHistory();
  const [schedule, setSchedule] = useState([initialValue]);

  useEffect(() => {
    axios.get(`http://localhost:9002/reserved/${id}`).then((response) => {
      setSchedule(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box schedule">
          <div className="content">
            <h1 className="title">Agendamento</h1>
              <div key={schedule.id} className="form">
                <h2></h2>
                <label>Tipo: &nbsp;</label>
                {schedule.type}
                <br />
                <label>Horário: &nbsp;</label>
                {schedule.date}
                <br />
                <label>Observações: &nbsp;</label>
                {schedule.notes}
                <br />
              </div>
              <Link to={`/scheduling`}>
                <button className="button">
                  Voltar
                </button>
                </Link>
              <Link to={`/scheduling/scheduled/edit/${schedule.id}`}>
                <button className="button">Editar</button>
              </Link>
              <Link to={`/scheduling/delete/${id}`}>
                <button
                  className="button"
                  type="button"
                >
                  Deletar
                </button>
              </Link>
   
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Scheduled;
