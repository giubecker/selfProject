import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "./Doubts.css";

import { Accordion, AccordionTab } from "primereact/accordion";

const initialValue = {
  pergunta: "",
  resposta: "",
};

export const Doubts = () => {
  const history = useHistory();
  const [values, setValues] = useState({});
  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:9002/doubts", values).then((response) => {
      history.push("doubts/success");
    });;
  }

  const [doubts, setDoubts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/answeredDoubts").then((response) => {
      setDoubts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>DÚVIDAS FREQUENTES</p>
          <br/>
          <div className="system-container">
            <div className="column">
              {doubts.map((doubt, index) => (
                <div key={index} className="doubts-container">
                  <Accordion>
                    <AccordionTab header={doubt.pergunta}>
                      <h5>{doubt.resposta}</h5>
                    </AccordionTab>
                  </Accordion>
                </div>
              ))}
              <div className="column">
              <br/>
                <h5>Não encontrou sua dúvida? Fale conosco</h5>
                <form onSubmit={onSubmit}>
                  <div>
                    <div>
                      <textarea
                        className="doubt-input"
                        id="mensagem"
                        name="pergunta"
                        onChange={onChange}
                        placeholder="Escreva aqui a sua dúvida"
                      ></textarea>
                      <br />
                    </div>
                  </div>
                  <div>
<button className="button" type="submit">
                      Enviar
                    </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Doubts;
