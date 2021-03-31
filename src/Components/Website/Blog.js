import React from "react";

const blog = (props) => {
  return (
    <div id="blog" className="container-fluid text-center bg-grey blog">
      <h2 className="blog-title">NOTÍCIAS</h2>
      <br />
      <h4>Para manter-se informado</h4>
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="blog-item text-center">
            {" "}
            <img
              src="Notícia.jpg"
              alt="Foto notícia 2"
              width="300"
              height="300"
            />
            <p>
              <strong>Título notícia 1</strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="blog-item text-center">
            {" "}
            <img
              src="Notícia.jpg"
              alt="Foto notícia 2"
              width="300"
              height="300"
            />
            <p>
              <strong>Título notícia 2</strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="blog-item text-center">
            {" "}
            <img
              src="Notícia.jpg"
              alt="Foto notícia 2"
              width="300"
              height="300"
            />
            <p>
              <strong>Título notícia 3</strong>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default blog;
