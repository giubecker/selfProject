import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EditProfile.css";

export const EditProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const history = useHistory();
  const [values, setValues] = useState({});
  useEffect(() => {
    axios.get("http://localhost:9002/profiles").then((response) => {
      setProfiles(response.data);
      console.log(response.data);
    });
  }, []);
  

  function onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:9002/reservados", values).then((response) => {
      history.push("/success");
    });
  }

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>MEU PERFIL</p>
          <br />
       
{profiles.map((profile) => (
  <div className="profile-info">
            <h4>Pessoal</h4>
            <h5>Nome Completo: <input className="input" onChange={null} placeholder={profile.nome}></input> </h5> 
            <h5>Idade: <input className="input"  onChange={null} placeholder={profile.idade}></input></h5> 
            <h4>Contato</h4>
            <h5>Telefone: <input className="input" onChange={null} placeholder={profile.telefone}></input></h5>
            <h5>E-mail: <input className="input" onChange={null} placeholder={profile.email}></input></h5>
            <h5>Endereço: <input className="input" onChange={null} placeholder={profile.end}></input></h5>
            <h5>CEP: <input className="input" onChange={null} placeholder={profile.cep}></input></h5>
            <h4>Outros</h4>
            <h5>Contato de Emergência: <input className="input" onChange={null} placeholder={profile.contatoEmergencia}></input></h5>
            <h5>Telefone: <input className="input" onChange={null} placeholder={profile.telefoneEmergencia}></input></h5>
            <h5>Tipo Sanguíneo:  <input className="input" onChange={null} placeholder={profile.tipoSanguineo}></input></h5>
            <h5>Medicamentos: <input className="input" onChange={null} placeholder={profile.medicamentos}></input></h5>
            <h5>Observações: </h5><textarea className="input" onChange={null} placeholder={profile.medicamentos}></textarea>
          </div>
))}
          <br />
          <button className="button">Salvar</button>
          <Link to="/profile">
                {" "}
                <button className="button">Cancelar</button>
              </Link>{" "}
         
        </div>
      </div>
    </>
  );
};
export default EditProfile;
