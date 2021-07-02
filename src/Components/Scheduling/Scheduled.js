import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../Helper/Error";

import axios from "axios";
import Sidebar from "../System/Sidebar";

export const Scheduled = () => {

  
  const history = useHistory();
  const [values, setValues] = useState({});

  function onChange(event) {
    const { name, value, id } = event.target;
    setDropdown(event.target.value);
    //const {id, valor} = event.target;
    // console.log ({name, value});
    // values[name] = value;
    setValues({ ...values, [name]: value });
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
  // function remove() {
  //   axios.delete("http://localhost:9002/reservados/16", values).then((response) => {
  //     history.push("/scheduling");
  //   });
  // }

  useEffect(() => {
    axios.get("http://localhost:9002/scheduling/").then((response) => {
      setDate(response.data);
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
              {date.map((date, index) => (
                <div key={date.id} className="form">
                  <h2></h2>
                  <label>Tipo: </label>
Rotina
                  <br />
                  <label>Horário: </label>

                  Segunda-feira, 3 de maio às 9:00hrs

                  <br />
                  <label>Observações: </label>
            
TESTE
                  <br />
                </div>
              ))}
              <Link to="/scheduling">
                {" "}
                <button className="button" type="">
                  Voltar
                </button>
              </Link>{" "}
              <button className="button" type="submit">
                Editar
              </button>
              <Link to="/scheduling">
              <button className="button" type="button" onClick={() =>   axios.delete("http://localhost:9002/reservados/15", values).then((response) => {
      history.push("/scheduling");
    })}>
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
