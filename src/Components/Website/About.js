import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      {/* Container (About Section) */}
      <div id="about" className="about container-fluid">
        <div className="about-description">
          <h2 className="about-title">SOBRE</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div class="col mx-auto text-center">
            <img
              className="about-image"
              src="senhora 01.jpg"
              alt="Imagem-Sobre"
            />
          </div>
        </div>
        <div className="about-description">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div class="col mx-auto text-center">
            <img
              className="about-image "
              src="senhora 01.jpg"
              alt="Imagem-Sobre"
            />
          </div>
        </div>
      </div>

      <div className="about container-fluid" align="center">
        <div className="row about" align="center">
          <h2 className="about-title">QUEM SOMOS</h2>
          <br />

          <div className="mission-vision">
            <div className="about-values col-sm-6">
              <span className="glyphicon glyphicon-globe icon"></span>
              <div className="value-title">
                {" "}
                <h4>
                  <strong>MISSÃO</strong>{" "}
                </h4>
              </div>
              <h5 className="description">
                A auxiliar as pessoas que buscam aprimorar ou resgatar a sua
                saúde na sua integralidade, promovendo uma vida longeva e
                funcional. Nosso diferencial é a atuação transparente e
                interativa, permitindo ao paciente participação ativa nas
                decisões relacionadas à sua saúde, relativizando os valores do
                paciente às mais robustas e atualizadas evidências científicas.
              </h5>
            </div>
            <div className=" about-values col-sm-6">
              <i class="fa fa-flag icon"></i>
              <div className="value-title">
                {" "}
                <h4>
                  <strong>VISÃO</strong>
                </h4>
              </div>
              <h5 className="description">
                Acreditamos que combater as doenças não é o suficiente. Reforçar
                nossa saúde para dificultar o surgimento das doenças e facilitar
                a reversão daquelas ativas é o nosso foco de estudo e trabalho.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="about container-fluid">
        <div className="valores " align="center">
          <div className="row ">
            <h2 className="about-title">NOSSOS VALORES</h2>
            <br />
            <div className="values">
              <div className="value">
                <i class="fa fa-handshake-o icon"></i>
                <div className="value-title">
                  {" "}
                  <h4>
                    <strong>Honestidade</strong>
                  </h4>{" "}
                </div>
                <h5>
                  Sabemos que você é o mestre da sua saúde, vamos ajuda-lo a
                  tomar as melhores decisões sobre seus hábitos. Como? Através
                  de informações robustas explicadas com clareza.
                </h5>
              </div>
              <div className="value">
                <i class="fas fa-hand-holding-medical icon"></i>
                <div className="value-title">
                  {" "}
                  <h4>
                    <strong>Intimidade</strong>
                  </h4>
                </div>
                <h5>
                  Não nos encontrarás atrás de uma mesa, vamos caminho junto
                  contigo, lado a lado, em direção a uma vida mais saudável e
                  longeva.
                </h5>
              </div>
              <div className="value">
                <i class="fas fa-laptop-medical icon"></i>
                <div className="value-title">
                  <h4>
                    <strong>Transparência</strong>
                  </h4>
                </div>
                <h5>
                  Todo seu histórico médico, todo seu prontuário, a sua
                  disposição 24 horas por dia, basta um clique.
                </h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="values">
              <div className="value">
                <i class="fas fa-fist-raised icon"></i>
                <div className="value-title">
                  <h4>
                    <strong>Movidos a Desafios</strong>
                  </h4>
                </div>
                <h5>
                  Estamos sempre buscando novos métodos para auxiliá-lo a se
                  superar a cada dia. Acreditamos que pessoas saudáveis e
                  conscientes fazem um mundo melhor.
                </h5>
              </div>
              <div className="value">
                <i class="fas fa-shield-alt icon"></i>
                <div className="value-title">
                  <h4>
                    <strong>Segurança</strong>
                  </h4>
                </div>
                <h5>
                  Revisamos meticulosamente cada um de nossos protocolos para
                  que nenhuma das nossas intervenções gere risco à sua saúde.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
