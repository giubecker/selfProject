import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import axios from "axios";
import "./EditProfile.css";

export const EditProfile = () => {
  const [loading, setLoading] = useState(false);
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
  const [values, setValues] = useState(initialValue);
  useEffect(() => {
    axios.get(`http://localhost:9002/profiles/${id}`).then((response) => {
      setValues(response.data);
      console.log(response.data);
    });
  }, []);

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:9002/profiles/${id}`, values)
      .then((response) => {
        setLoading(false);
        history.push("/profile/success");
      });
  }

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>MEU PERFIL</p>
          <h5>Editar</h5>
          <div className="edit-profile-info">
            <form onSubmit={onSubmit}>
              <br /> <h4>Pessoal</h4>
              <div>
                <label htmlFor="name"> Nome Completo:&nbsp;</label>
                <input
                  id="name"
                  name="name"
                  required="required"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.name || ""}
                ></input>
              </div>
              <div>
                <label htmlFor="age"> Idade: &nbsp;</label>
                <input
                  id="age"
                  name="age"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.age || ""}
                ></input>
              </div>
              <br />
              <h4>Contato</h4>
              <div>
                <label htmlFor="phone"> Telefone: &nbsp;</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.phone || ""}
                ></input>
              </div>
              <div>
                <label htmlFor="email"> Email: &nbsp;</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.email || ""}
                ></input>
              </div>
              <div>
                <label htmlFor="address"> Endereço &nbsp;</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.address || ""}
                ></input>
              </div>
              <div>
                <label htmlFor="zipCode"> CEP: &nbsp;</label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.zipCode || ""}
                ></input>
              </div>
              <br />
              <h4>Outros</h4>
              <div>
                <label htmlFor="emergencyContact">
                  {" "}
                  Contato de Emergência: &nbsp;
                </label>
                <input
                  id="emergencyContact"
                  name="emergencyContact"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.emergencyContact || ""}
                ></input>
              </div>
              <div>
                <label htmlFor="emergencyPhone"> Telefone:&nbsp;</label>
                <input
                  id="emergencyPhone"
                  name="emergencyPhone"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.emergencyPhone || ""}
                ></input>
              </div>
              <div>
                <label htmlFor="bloodType"> Tipo sanguíneo:&nbsp;</label>
                <input
                  id="bloodType"
                  name="bloodType"
                  type="text"
                  required={true}
                  className="input"
                  onChange={onChange}
                  value={values.bloodType || ""}
                ></input>
              </div>
              <div>
                <label htmlFor="drugs"> Medicamentos:&nbsp;</label>
                <textarea
                  id="drugs"
                  name="drugs"
                  type="text"
                  required={true}
                  className="doubt-input"
                  onChange={onChange}
                  value={values.drugs || ""}
                ></textarea>
              </div>
              <div className="column-notes">
                <label htmlFor="notes"> Observações:&nbsp;</label>
                <textarea
                  id="notes"
                  name="notes"
                  type="text"
                  required={true}
                  className="doubt-input"
                  onChange={onChange}
                  value={values.notes || ""}
                ></textarea>
              </div>
              <div className="buttons">
                {loading ? (
                  "Carregando..."
                ) : (
                  <button className="button" type="submit">
                    {" "}
                    salvar{" "}
                  </button>
                )}
                <Link to="/profile">
                  <button className="button"> Cancelar </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
