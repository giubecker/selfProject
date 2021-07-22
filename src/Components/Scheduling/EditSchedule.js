import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";
import Sidebar from "../System/Sidebar";

export const EditSchedule = () => {
  var testes = document.getElementById("teste");
  const { id } = useParams();
  const history = useHistory();
  const [values, setValues] = useState({});
  const [dates, setDates] = useState([]);
  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    // setDates(dates.filter((e)=>(e !== dates.dateTime)));
    // console.log(dates);
    axios
      .patch(`http://localhost:9002/reserved/${id}`, values)
      .then(() => {
        history.push('/scheduling/successedit');
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
              <div className="form">
                <h2></h2>
                <label>Tipo: &nbsp;</label>
                <select className="input" name="type" onChange={onChange}>
                  <option name="date" onChange={onChange}> Selecione </option>
                  <option name="date" onChange={onChange} value="Rotina"> Rotina </option>
                  <option name="date" onChange={onChange} value="Urgência"> Urgência </option>
                  <option name="date" onChange={onChange} value="Outros"> Outros </option>
                </select>
                <br />
                <label>Horários: &nbsp;</label>
                <select
                  id="teste"
                  className="input"
                  name="date"
                  onChange={onChange}
                >
                  {dates.map((date, index) => (
                    <option
                      //selected={values.date}
                      name="date"
                      onChange={() => onChange}
                    >
                      {date.dateTime}
                    </option>
                  ))}
                </select>
                <br />
                <label htmlFor="notes"> Observações:&nbsp;</label>
                <textarea
                  id="notes"
                  required={true}
                  name="notes"
                  type="text"
                  className="doubt-input"
                  onChange={onChange}
                  value={values.notes || ""}
                ></textarea>
                <div className="column-notes"></div>
                <br />
              </div>
              <button className="button" type="submit"> Salvar </button>
              <button className="button" onClick={() => history.goBack()}> Cancelar </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default EditSchedule;
