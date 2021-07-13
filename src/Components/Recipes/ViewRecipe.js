import React, { useState, useEffect } from "react";
import "./Recipe.css";
import Error from "../Helper/Error";
import axios from "axios";
import Sidebar from "../System/Sidebar";

export const ViewRecipe = () => {
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

  useEffect(() => {
    axios.get("http://localhost:3000/scheduling").then((response) => {
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

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box schedule">
          <div className="content">
            <h1 className="title">Nova Receita</h1>
            {/* <h1 className='title'>{questions[0].title}</h1> */}

            {date.map((date, index) => (
              <div key={date.id} className="form">
                <h2 key={date.type}>{date.type}</h2>
                <h2></h2>
                <div>
                  <div>
                    {" "}
                    <label htmlFor="title">Medicamento </label>
                    <br />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input"
                      id="01"
                      name="name"
                      type="text"
                      onChange="onchanges"
                    />
                    <br />
                  </div>
                </div>
                <div>
                  {" "}
                  <label htmlFor="title">Dosagem </label>
                  <br />
                </div>
                <select
                  className="input"
                  value={dropdown}
                  onChange={(e) => {
                    setDropdown(e.target.value);
                  }}
                >
                  <option value="rotina">5mg</option>
                  <option value="urgencia">10mg</option>
                  <option value="outros">15mg</option>
                  <option value="outros">20mg</option>
                  <option value="outros">1ml</option>
                  <option value="outros">5ml</option>
                </select>
                <br />
                <select
                  className="input"
                  value={dropdown}
                  onChange={(e) => {
                    setDropdown(e.target.value);
                  }}
                >
                  <option value="20/03">20/03</option>
                  <option value="21/03">21/03</option>
                  <option value="24/03">24/03</option>
                  <option value="25/03">25/03</option>
                  <option value="26/03">26/03</option>
                </select>
                <br />
                <br />
                <div>
                  {" "}
                  <label htmlFor="title">Observações </label>
                  <br />
                </div>
                <div>
                  {" "}
                  <input
                    className="input"
                    id="01"
                    name="name"
                    type="text"
                    onChange="onchanges"
                  />
                  <br />
                </div>
                <br />
                <button className="button"> Salvar</button>
              </div>
            ))}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewRecipe;
