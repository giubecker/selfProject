import { React, useState, useEffect } from "react";
import "./NewQuestionnaire.css";
import { useHistory, Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";

export const NewQuestionnaire = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [questionnaire, setQuestionnaire] = useState({});
  const history = useHistory();
  const [dropdown, setDropdown] = useState("Selecione");

  useEffect(() => {
    axios.get(`http://localhost:9002/questionnaires/${id}`).then((response) => {
      setQuestionnaire(response.data);
      console.log(response.data);
    });
  }, []);

  const [values, setValues] = useState([]);

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onChangeOption(event) {
    const { name, value } = event.target;
    setDropdown({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    axios.post("http://localhost:9002/answeredQuestionnaires", values);
    axios
      .post("http://localhost:9002/answereds", {
        title: `${questionnaire.title}`,
        status: "aguardando avaliação",
        questionsQuantity: ``,
        points: null,
        corrected: false,
        observation: "Você receberá seu resultado assim que possível.",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .delete(`http://localhost:9002/questionnaires/${id}`)
      .then((response) => {
        setLoading(false);
        history.push("/questionnaires/success");
      });
  }

  return (
    <>
      <Sidebar />

      <div className="container">
        <div className="box">
          <div className="single-questionnaire">
            <div className="content">
              <h1>{questionnaire.title}</h1>
              <form onSubmit={onSubmit}>
                <br />
                <br />
                <div>
                  {questionnaire.questions &&
                    questionnaire.questions.map((question, key) => (
                      <div key={key}>
                        <div className="teste1">
                          {" "}
                          <label key={question.title} htmlFor="title">
                            {question.id}- {question.title}{" "}
                          </label>
                          <br />
                        </div>

                        {question.text ? (
                          <div className="teste2">
                            {" "}
                            <input
                              className="questionnaire-input"
                              key={question.id}
                              id={question.id}
                              required={true}
                              required="required"
                              name={question.title}
                              type="text"
                              onChange={onChange}
                            />
                            <br />
                          </div>
                        ) : (
                          <select
                            className="input"
                            name={question.title}
                            onChange={onChange}
                          >
                            {question.option.map((option) => (
                              <option
                                name={question.title}
                                value={option}
                                onChange={onChangeOption}
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    ))}
                  {loading ? (
                    "Carregando"
                  ) : (
                    <div>
                      <button className="button" type="submit">
                        Enviar
                      </button>
                      <Link to={`/questionnaires/new/${id}/exit`}>
                        <button className="button"> Cancelar </button>
                      </Link>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewQuestionnaire;
