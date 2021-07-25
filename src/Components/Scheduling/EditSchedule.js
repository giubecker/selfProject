import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory, useParams, Link } from "react-router-dom";

import axios from "axios";
import Sidebar from "../System/Sidebar";

export const EditSchedule = () => {
  const { id } = useParams();
  const history = useHistory();
  const [values, setValues] = useState({});
  const [dates, setDates] = useState([]);
  const types = [
    { title: "Rotina", selected: false },
    { title: "Urgência", selected: false },
    { title: "Outros", selected: false },
  ];

  useEffect(async () => {
    await axios.get(`http://localhost:9002/reserved/${id}`).then((response) => {
      setValues(response.data);
    });
    await axios.get("http://localhost:9002/datetimes").then((response) => {
      setDates(response.data);
    });
    console.log(dates);
  }, []);

  function loadDate(date) {
    if (date.dateTime == values.date) {
      return true;
    } else return false;
  }

  function loadType(type) {
    if (type.title == values.type) {
      return true;
    } else return false;
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.patch(`http://localhost:9002/reserved/${id}`, values).then(() => {
      history.push("/scheduling/successedit");
    });
  }

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
                  <option name="date" onChange={onChange}>
                    {" "}
                    Selecione{" "}
                  </option>
                  {types.map((type, key) => (
                    <option
                      key={key}
                      name="date"
                      value={type.title}
                      onChange={onChange}
                      selected={loadType(type)}
                    >
                      {" "}
                      {type.title}{" "}
                    </option>
                  ))}
                </select>
                <br />
                <label>Horários: &nbsp;</label>
                <select
                  required
                  className="input"
                  name="date"
                  onChange={onChange}
                >
                  <option name="date" value="" selected={true} disabled={true}>
                    {" "}
                    Selecione{" "}
                  </option>
                  {dates &&
                    dates.map((date, key) => (
                      <option
                        id={date.id}
                        key={key}
                        name="date"
                        value={date.dateTime}
                        onChange={() => onChange}
                        selected={loadDate(date)}
                        disabled={date.disabled}
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
              <button className="button" type="submit">
                {" "}
                Salvar{" "}
              </button>
<Link to={`/scheduling/scheduled/${id}`}>
<button className="button" >
                {" "}
                Cancelar{" "}
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
export default EditSchedule;
