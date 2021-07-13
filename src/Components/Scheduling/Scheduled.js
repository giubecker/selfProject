import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../Helper/Error";

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
  const [values, setValues] = useState({});
  const [schedule, setSchedule] = useState([initialValue]);

  function onChange(event) {
    const { name, value, id } = event.target;
    setDropdown(event.target.value);
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:9002/reserved", values).then((response) => {
      history.push("/scheduling");
    });
  }
  // function remove() {
  //   axios.delete("http://localhost:9002/reservados/16", values).then((response) => {
  //     history.push("/scheduling");
  //   });
  // }

  useEffect(() => {
    axios.get(`http://localhost:9002/reserved/${id}`).then((response) => {
      setSchedule(response.data);
      console.log(response.data);
    });
  }, []);

  // console.log(acheduling);

  const [dropdown, setDropdown] = useState("Selecione");

  const [dates, setDates] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/agendamentos").then((response) => {
      setDates(response.data);
      //console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box schedule">
          <div className="content">
            <h1 className="title">Agendamento</h1>
            <form onSubmit={onSubmit}>
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
              <Link to="/scheduling">
                {" "}
                <button className="button" type="">
                  Voltar
                </button>
              </Link>{" "}
              <Link to={`/scheduling/scheduled/edit/${schedule.id}`}>
                <button className="button">Editar</button>
              </Link>
              <Link to="/scheduling">
                <button
                  className="button"
                  type="button"
                  onClick={() =>
                    axios
                      .delete(
                        `http://localhost:9002/reservados/${schedule.id}`,
                        values
                      )
                      .then((response) => {
                        history.push("/delete");
                      })
                  }
                >
                  Deletar
                </button>
              </Link>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Scheduled;
