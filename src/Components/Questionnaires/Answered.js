import React, { useState, useEffect } from "react";
import "./Questionnaire.css";
import { useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "./Questionnaire.css";
import Sidebar from "../System/Sidebar";

export const Answered = () => {
  const [formQuestions, setFormQuestions] = useState([]);
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9002/formQuestions").then((response) => {
      setFormQuestions(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:9002/questionnaires").then((response) => {
      setQuestionnaires(response.data);
      console.log(response.data);
    });
  }, []);

  const [values, setValues] = useState([]);

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:9002/answer", values).then((response) => {
      history.push("/questionnaires");
    });
  }

  const initialValue = {
    title: "",
    value: "",
  };

  // const choices = [
  //     'Não', 'Leve', 'Moderado', 'Intenso'
  // ]
  //const [values, setValues] = useState([initialValue]);
  // const [questions, setQuestions] = useState({});

  //     useEffect(() => {
  //     axios.get('http://localhost:9002/questions')
  //     .then((response) => {
  //         setQuestions(response.data);
  //         console.log(response.data);

  //     });
  // }, [])

  // console.log(questions);
  // const [radio, setRadio] = React.useState('');
  // const [radiotwo, setRadiotwo] = React.useState('');
  // const [radiothree, setRadiothree] = React.useState('');
  // const [radiofour, setRadiofour] = React.useState('');

  // function handleChange({target}) {
  //     setRadio(target.value);
  // }

  // function handleChangetwo({target}) {
  //     setRadiotwo(target.value);
  // }

  // function handleChangeThree({target}) {
  //     setRadiotwo(target.value);
  // }

  // function handleChangeFour({target}) {
  //     setRadiotwo(target.value);
  // }

  return (
    <>
      <Sidebar />

      <div className="container">
        <div className="box">
          <div className="single-questionnaire">
            <div className="content">
              {questionnaires.map((questionnaire, index) => (
                <h1>{questionnaire.title}</h1>
              ))}
              ;
              <form onSubmit={onSubmit}>
                <div>
                  {formQuestions.map((formQuestion, index) => (
                    <div key={formQuestion.id}>
                      <div className="teste1">
                        {" "}
                        <label key={formQuestion.title} htmlFor="title">
                          {formQuestion.id}- {formQuestion.title}{" "}
                        </label>
                        <br />
                      </div>
                      <div className="teste2">
                        {" "}
                        <input
                          key={index}
                          id={formQuestion.id}
                          name={formQuestion.title}
                          type="text"
                          onChange={onChange}
                        />
                        <br />
                      </div>
                    </div>
                  ))}
                  ;
                  <div>
                    <button className="button" type="submit">
                      {" "}
                      Enviar{" "}
                    </button>{" "}
                    <button className="button"> Cancelar </button>
                  </div>
                </div>
              </form>
              {/* <h1 className='title'>{questions[0].title}</h1> */}
              {/* {questions.map((question, index) => (
        <div key={question.id} className='question'>  
        
        <h2>{question.question}</h2>
        <label htmlFor=''>
        <input type={question.type} value={choices[0]} checked={radio ==='Não'} onChange={handleChange}></input>
            {choices[0]} 
        </label>
        <label htmlFor=''>
        <input type={question.type} value={choices[1]}  checked={radio ==='Leve'} onChange={handleChange}></input>
            {choices[1]} 
        </label>
        <label htmlFor=''>
        <input type={question.type} value={choices[2]}  checked={radio ==='Moderado'} onChange={handleChange}></input>
            {choices[2]} 
        </label>
        <label htmlFor=''>
        <input type={question.type} value={choices[3]}  checked={radio ==='Intenso'} onChange={handleChange}></input>
            {choices[3]} 
        </label>
        </div>
    ))} */}
              {/* <label htmlFor=''>
        <input type='radio' value="notebook" checked={radio ==='notebook'} onChange={handleChange} ></input>
        Notebook
    </label>
    <label htmlFor=''>
        <input type='radio' value="smartphone" checked={radio ==='smartphone'} onChange={handleChange} ></input>
        SmartPhone
    </label> */}
              {/* <br/>
    {radiotwo}
    <label htmlFor=''>
        <input type='radio' value="azul" checked={radiotwo ==='azul'} onChange={handleChangetwo} ></input>
        Azul
    </label>
    <label htmlFor=''>
        <input type='radio' value="rosa" checked={radiotwo ==='rosa'} onChange={handleChangetwo} ></input>
        Rosa
    </label> */}
              {/* {ideas.map(idea => {

<div>{idea.title}</div>
	idea.premises.map(x => {
        <h3>{x}</h3>
console.log(x);
	});
})}; */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Answered;
