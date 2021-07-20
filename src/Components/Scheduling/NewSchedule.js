import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";

export const NewSchedule = () => {
  const initialValue = {
    type: "",
    date: "",
    hour: "",
  };
  const history = useHistory();
  const [values, setValues] = useState({});
  const [dropdown, setDropdown] = useState("Selecione");
  const [type, setType] = useState("");
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState([initialValue]);
  const [remove, setRemove] = useState({});

  useEffect(() => {
    axios.get("http://localhost:9002/agendamentos").then((response) => {
      setDates(response.data);
    });
  }, []);

  function onSubmit(event, index) {
    event.preventDefault();
    console.log(remove.id);

    axios
      .post("http://localhost:9002/reserved", values)
      //axios.delete("http://localhost:9002/agendamentos/1", values)
      .then((response) => {
        history.push("/success");
      });
  }

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

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box schedule">
          <div className="content">
            <h1 className="title">Novo Agendamento</h1>
            <form onSubmit={onSubmit}>
              <div key={date.id} className="form">
                <h2></h2>
                <label>Tipo: </label>
                <select className="input" name="type" onChange={onChange}>
                  <option name="date" onChange={onChangeRoutine} value="Nenhum Selecionado">
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
                <label>Horários:</label>
                <select className="input" name="date" onChange={onChange}>
                  {dates.map((date, index) => (
                    <option
                      name="date"
                      value={date.dateTime}
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
                  name="notes"
                  required="required" 
                  className="doubt-input"
                  onChange={onChange}
                ></textarea>
                <br />
              </div>
              <Link to="/scheduling">
                {" "}
                <button className="button" type="">
                  Voltar
                </button>
              </Link>{" "}
              <button className="button" type="submit">
                Salvar
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewSchedule;
