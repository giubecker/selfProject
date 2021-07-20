import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory, useParams } from "react-router-dom";

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
  const [remove, setRemove] = useState({});
  const [type, setType] = useState("");

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onChangeRoutine(event) {
    const { name, value } = event.target;
    setType({ ...values, [name]: value });
  }

  function onChangeOption(event) {
    const { name, value } = event.target;
    setDropdown({ ...values, [name]: value });
    setRemove({ [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:9002/reserved/${id}`, values)
      .then((response) => {
        history.push(`/scheduling/scheduled/${id}`);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:9002/reserved/${id}`).then((response) => {
      setValues(response.data);
      axios.get("http://localhost:9002/agendamentos").then((response) => {
        setDates(response.data);
      });
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
                  onChange={onChange} //onChange={(e) =>{setDropdown(e.target.value)}}
                >
                                  <option name="date" onChange={onChangeRoutine} value="Rotina">
                    Selecione
                  </option>
                  <option name="date" onChange={onChangeRoutine} value="Rotina">
                    Rotina
                  </option>
                  <option
                    name="date"
                    onChange={onChangeRoutine}
                    value="Urgência"
                  >
                    Urgência
                  </option>
                  <option name="date" onChange={onChangeRoutine} value="Outros">
                    Outros
                  </option>
                </select>
                <br />
                <label>Horários: &nbsp;</label>
                <select
                  className="input"
                  name="date"
                  //placeholder={values.date}
                  onChange={onChange}
                >
                  {dates.map((date, index) => (
                    <option
                      name="date"
                      value={date.dateTime}
                      onChange={() => onChangeOption}
                    >
                      {date.dateTime}
                    </option>
                  ))}
                </select>
                <br />
                
                                <label htmlFor="notes"> Observações:&nbsp;</label>
                <textarea
                  id="notes"
                  name="notes"
                  type="text"
                  className="doubt-input"
                  onChange={onChange}
                  value={values.notes || ""}
                ></textarea>
                              <div className="column-notes">

              </div>
                <br />
              </div>

              <button className="button" type="submit">
                Salvar
              </button>

              <button className="button" onClick={() => history.goBack()}>
                Cancelar
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default EditSchedule;
