import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import Sidebar from "../System/Sidebar";
import "./Contact.css";

export const Contact = () => {
  const { id } = useParams();
  const history = useHistory();
  const [contact, setContact] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:9002/contacts/${id}`).then((response) => {
      setContact(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>EQUIPE & MÉDICOS</p>
          <br />
          <button
                className="my-library-link"
                onClick={() => history.goBack()}
              >
                <FaIcons.FaArrowLeft /> Voltar
              </button>
          <div className="row">
              {" "}


<div className="row singlecard">
                  <div className="contact-card-column1">
                    <img className="contact-image" src={contact.image}></img>
                  </div>
                  <div className="contact-card-column2">
                    Nome:&nbsp; {contact.name}
                    <br /> Especialidade: &nbsp;{contact.ocupation} <br /> <br /> 
                    Telefone:&nbsp;{contact.phone}<br />
                    Email: &nbsp; {contact.email}<br /> <br />
                    Perfil: <h5>&nbsp; {contact.observation}</h5>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
