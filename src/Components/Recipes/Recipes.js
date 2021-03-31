import React from "react";
import Toolbar from "../System/Toolbar";
import Sidebar from "../System/Sidebar";
import { Link } from "react-router-dom";
import "./Recipes.css";

export const Recipes = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>RECEITAS</p>
          <h1>Receituários aprovados:</h1>
          <Link to="/recipes/view">
            <button className="questionnaire-button">Oxicodona 10mg</button>
          </Link>
          <Link to="/recipes/view">
            <button className="questionnaire-button">Zolpidem 20mg</button>
          </Link>
          <br />
          <br />
          <h1>Receituários pendentes:</h1>
          <button className="recipe-button">
            <div>Lorazepam 20mg</div> <div>Em Andamento</div>
          </button>
          <button className="recipe-button">
            <div>Diazepam 10mg</div>
            <div>Reprovado</div>
          </button>
          <br />
          <br />
          <Link to="/recipes/new">
            {" "}
            <button className="recipe-button">
              <h3>Solicitar nova receita</h3>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Recipes;
