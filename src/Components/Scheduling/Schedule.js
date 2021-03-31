import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../Helper/Error";
import axios from "axios";
import Sidebar from "../System/Sidebar";

export const Schedule = () => {
  const history = useHistory();
  const [values, setValues] = useState({});

  function onChange(event) {
    const { name, value, id } = event.target;
    setDropdown(event.target.value);
    //const {id, valor} = event.target;
    // console.log ({name, value});
    // values[name] = value;
    setValues({ ...values, [name]: value });

    // setValores({...valores, [id]: valor });
  }

  const initialValue = {
    type: "",
    date: "",
    hour: "",
  };

  const schedule = {
    type: "rotinas",
    date: "terça",
    hour: "12:30",
  };
  const [date, setDate] = useState([initialValue]);

  function onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:9002/reservados", values).then((response) => {
      history.push("/scheduling");
    });
  }

  useEffect(() => {
    axios.get("http://localhost:9002/scheduling/").then((response) => {
      setDate(response.data);
      console.log(response.data);
    });
  }, []);

  // console.log(acheduling);
  const [radio, setRadio] = React.useState("");
  const [radiotwo, setRadiotwo] = React.useState("");
  const [radiothree, setRadiothree] = React.useState("");
  const [radiofour, setRadiofour] = React.useState("");
  const [dropdown, setDropdown] = useState("Selecione");

  function handleChange({ target }) {
    setRadio(target.value);
  }

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
            <h1 className="title">Novo Agendamento</h1>
            <form onSubmit={onSubmit}>
              {date.map((date, index) => (
                <div key={date.id} className="form">
                  <h2></h2>
                  <label>Tipo: </label>
                  <select
                    className="input"
                    name="tipo"
                    value={dropdown}
                    onChange={onChange} //onChange={(e) =>{setDropdown(e.target.value)}}
                  >
                    <option value="Rotina">Rotina</option>
                    <option value="Urgência">Urgência</option>
                    <option value="Outros">Outros</option>
                  </select>
                  <br />
                  <label>Horários:</label>
                  <select
                    className="input"
                    value={dropdown}
                    name="horário"
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
                  <label>Observações: </label>
                  <textarea
                    className="input"
                    name="observações"
                    onChange={onChange}
                  ></textarea>
                  <br />
                </div>
              ))}
              <Link to="/scheduling">
                {" "}
                <button className="button" type="submit">
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
export default Schedule;
