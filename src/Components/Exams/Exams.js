import React from "react";
import Sidebar from "../System/Sidebar";
import "./Exams.css";

export const Exams = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>GRÁFICOS DE EVOLUÇÃO</p>
          <br />
          <div className='row'>
    <div className='column'>
    <div className='exam-card'>
    <div className='row'>
    <div className='column'>Gráfico <br/>
    <img className="image" src="https://meudominio.com/public_html/imagens/imagem.jpg"
></img>
    </div>
    <div className='column'>
      <div className="description">    Descrição <br/>
   <h5> O exame de vitamina D, também conhecido como exame de hidroxivitamina D ou 25(OH)D, tem como  ...</h5> </div>
<button className="button">Exame Completo</button></div>
    </div>
    </div>
    <div className='exam-card'>
    <div className='row'>
    <div className='column'>Gráfico</div>
    <div className='column'>
      <div className="description">    Descrição <br/>
   <h5> O exame de vitamina D, também conhecido como exame de hidroxivitamina D ou 25(OH)D, tem como  ...</h5> </div>
<button className="button">Exame Completo</button></div>
    </div>
    </div>
    <div className='exam-card'>
    <div className='row'>
    <div className='column'>Gráfico</div>
    <div className='column'>
      <div className="description">    Descrição <br/>
   <h5> O exame de vitamina D, também conhecido como exame de hidroxivitamina D ou 25(OH)D, tem como  ...</h5> </div>
<button className="button">Exame Completo</button></div>
    </div>
    </div>
    <div className='exam-card'>
    <div className='row'>
    <div className='column'>Gráfico</div>
    <div className='column'>
      <div className="description">    Descrição <br/>
   <h5> O exame de vitamina D, também conhecido como exame de hidroxivitamina D ou 25(OH)D, tem como  ...</h5> </div>
<button className="button">Exame Completo</button></div>
    </div>
    </div></div>

</div>
        </div>
      </div>
    </>
  );
};
export default Exams;
