import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import axios from "axios";
import "./EditProfile.css";

export const EditProfile = () => {
  const history = useHistory();
  const { id } = useParams();
  const initialValue = {
    title: "",
    value: "",
    name: "",
    age: "",
    phone: "",
    email: "",
    adress: "",
    zipCode: "",
    emergencyContact: "",
    emergencyPhone: "",
    bloodType: "",
    drugs: "",
    notes: "",
  };
  const [profile, setProfiles] = useState({});
  const [values, setValues] = useState(initialValue);
  useEffect(() => {
    axios.get(`http://localhost:9002/profiles/${id}`).then((response) => {
      setProfiles(response.data);
      console.log(response.data);
    });
  }, []);

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>MEU PERFIL</p>
          <br />
          <div className="edit-profile-info">
            <h4>Pessoal</h4>
            <h5>
              Nome Completo:{" "}
              <input
                id="name"
                name="name"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.name || ""}
              ></input>{" "}
            </h5>
            <h5>
              Idade:{" "}
              <input
                id="age"
                name="age"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.age || ""}
              ></input>
            </h5>
            <h4>Contato</h4>
            <h5>
              Telefone:{" "}
              <input
                id="phone"
                name="phone"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.phone || ""}
              ></input>
            </h5>
            <h5>
              E-mail:{" "}
              <input
                id="email"
                name="email"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.email || ""}
              ></input>
            </h5>
            <h5>
              Endereço:{" "}
              <input
                id="adress"
                name="adress"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.adress || ""}
              ></input>
            </h5>
            <h5>
              CEP:{" "}
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.zipCode || ""}
              ></input>
            </h5>
            <h4>Outros</h4>
            <h5>
              Contato de Emergência:{" "}
              <input
                id="emergencyContact"
                name="emergencyContact"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.emergencyContact || ""}
              ></input>
            </h5>
            <h5>
              Telefone:{" "}
              <input
                id="emergencyPhone"
                name="emergencyPhone"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.emergencyPhone || ""}
              ></input>
            </h5>
            <h5>
              Tipo Sanguíneo:{" "}
              <input
                id="bloodType"
                name="bloddType"
                type="text"
                className="input"
                onChange={onChange}
                value={profile.bloodType || ""}
              ></input>
            </h5>
            <h5>
              Medicamentos:{" "}
              <input
                id="drugs"
                name="drugs"
                type="text"
                className="input"
                value={profile.drugs || ""}
                onChange={onChange}
                name="medicamentos"
              ></input>
            </h5>
            <h5>Observações: </h5>
            <textarea
              id="notes"
              name="notes"
              type="text"
              className="input"
              onChange={onChange}
              value={profile.notes || ""}
            ></textarea>
          </div>
          <br />
          <div>
            <button
              className="button"
              onClick={() => {
                axios
                  .put("http://localhost:9002/profiles/1", values)
                  .then((response) => {
                    history.push("/success");
                  });
              }}
            >
              Salvar
            </button>
          
              {" "}
              <button onClick={() => history.goBack()}  className="button">Cancelar</button>
     
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
