import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import Sidebar from "../System/Sidebar";

export const EditSchedule = () => {
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
  const [dropdown, setDropdown] = useState("Selecione");
  const [dates, setDates] = useState([]);

  function onChange(event) {
    const { name, value, id } = event.target;
    setDropdown(event.target.value);
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:9002/reserved", values).then((response) => {
      history.push(`/scheduling/scheduled/${id}`);
    });
  }

  useEffect(() => {
    axios.get(`http://localhost:9002/reserved/${id}`).then((response) => {
      setSchedule(response.data);
      console.log(response.data);
    });
  }, []);


  useEffect(() => {
    axios.get("http://localhost:9002/agendamentos").then((response) => {
      setDates(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box schedule">
          <div className="content">
            <h1 className="title">Editar Agendamento</h1>
            <form onSubmit={onSubmit}>
              <div key={schedule.id} className="form">
                <h2></h2>
                <label>Tipo: &nbsp;</label>
                  <select
                    className="input"
                    name="type"
                    value={dropdown}
                    onChange={onChange} //onChange={(e) =>{setDropdown(e.target.value)}}
                  >
                    <option value="Rotina">Rotina</option>
                    <option value="Urgência">Urgência</option>
                    <option value="Outros">Outros</option>
                  </select>
                  <br />
                <label>Horários: &nbsp;</label>
                <select
                    className="input"
                    value={dropdown}
                    name="date"
                    onChange={onChange}
                  >
                    {dates.map((date, index) => (
                      <option value={date.dateTime} onChange={onChange}>
                        {date.dateTime}
                      </option>
                    ))}
                  </select>
                  <br />
                <br />
                <label>Observações: &nbsp;</label>
                {schedule.notes}
                <br />
              </div>
              <Link to="/scheduling">
                {" "}
                <button className="button" type="submit">
                  Salvar
                </button>
              </Link>{" "}
              <Link to={`/scheduling/scheduled/${id}`}>
                <button className="button">Cancelar</button>
              </Link>
              <Link to="/scheduling">
              </Link>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default EditSchedule;
