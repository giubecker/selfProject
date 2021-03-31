import React from "react";

const blog = (props) => {
  return (
    <div id="plans" className="container-fluid text-center bg-grey plans">
      <h2 className="plans-title">PROTOCOLOS</h2>
      <br />
      <h4>Descubra qual plano ideal para você</h4>
      <div className="row">
        <div className="col-sm-6">
          <div className="plans-item text-center">
            <p>
              <strong>Avaliação Global de Saúde</strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="plans-item text-center">
            <p>
              <strong>
                Programa de Saúde Metabólica e Longevidade Funcional
              </strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="plans-item text-center">
            <p>
              <strong>Reversão da Resistência Insulínica</strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="plans-item text-center">
            <p>
              <strong>Reversão da Obesidade</strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <div className="plans-item text-center">
            <p>
              <strong>Reversão da Diabetes Tipo II</strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
