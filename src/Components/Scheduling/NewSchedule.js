import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";

export const NewSchedule = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [values, setValues] = useState({});
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9002/agendamentos").then((response) => {
      setDates(response.data);
    });
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    setLoading(true);

    dates.forEach((date, index) => {
      if (date.dateTime == values.date) {
        axios.patch(`http://localhost:9002/agendamentos/${index}`, {
          disabled: true,
        });
      }
    });
    axios.post("http://localhost:9002/reserved", values).then((response) => {
      setLoading(false);
      history.push("/success");
    });
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  }

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box schedule">
          <div className="content">
            <h1 className="title">Novo Agendamento</h1>
            <form onSubmit={onSubmit}>
              <div className="form">
                <h2></h2>
                <label>Tipo: </label>
                <select
                  required
                  className="input"
                  name="type"
                  onChange={onChange}
                >
                  <option
                    key="00"
                    name="date"
                    value=""
                    selected
                    disabled={true}
                  >
                    {" "}
                    Selecione{" "}
                  </option>
                  <option
                    key="01"
                    name="date"
                    onChange={onChange}
                    value="Rotina"
                  >
                    {" "}
                    Rotina{" "}
                  </option>
                  <option
                    key="02"
                    name="date"
                    onChange={onChange}
                    value="Urgência"
                  >
                    {" "}
                    Urgência{" "}
                  </option>
                  <option
                    key="03"
                    name="date"
                    onChange={onChange}
                    value="Outros"
                  >
                    {" "}
                    Outros{" "}
                  </option>
                </select>
                <br />
                <label>Horários:</label>
                <select
                  required
                  className="input"
                  name="date"
                  onChange={onChange}
                >
                  <option
                    key="none"
                    name="date"
                    value=""
                    selected
                    disabled={true}
                  >
                    {" "}
                    Selecione{" "}
                  </option>
                  {dates &&
                    dates.map((date, index) => (
                      <option
                        id={index}
                        key={date.id}
                        name="date"
                        value={date.dateTime}
                        onChange={onChange}
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
                  name="notes"
                  required="required"
                  className="doubt-input"
                  onChange={onChange}
                ></textarea>
                <br />
                {/* <input type="hidden" name="disabled" value={false} onChange={handleChange}/> */}
              </div>
              <Link to="/scheduling">
                {" "}
                <button className="button"> Voltar </button>{" "}
              </Link>
              {loading ? (
                "Carregando..."
              ) : (
                <button className="button" type="submit">
                  {" "}
                  Salvar{" "}
                </button>
              )}
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewSchedule;
