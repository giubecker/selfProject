import React, { useEffect, useState } from "react";
import Sidebar from "../System/Sidebar";
import * as FaIcons from "react-icons/fa";
import "./Library.css";
import { ScrollPanel } from "primereact/scrollpanel";
import axios from "axios";
import { Link } from "react-router-dom";

export const Library = () => {
  const [contents, setContents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9002/library").then((response) => {
      setContents(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>MATERIAL DIDÁTICO</p>
          <div className="library-header">
            <div className="my-library-link">
              <Link to="/mylibrary">
                {" "}
                <a>
                  {" "}
                  <FaIcons.FaBookmark /> Minha Biblioteca
                </a>
              </Link>
            </div>
            <div>
              <input
                className="search"
                placeholder="digite para pesquisar..."
                type="text"
                onChange={(event) => setSearchTerm(event.target.value)}
              ></input>
            </div>
          </div>
          <div className="column">
            <div className="library-container">
              Videos
              <ScrollPanel
                style={{ width: "100%", height: "100%" }}
                className="custom"
              >
                <div className="row ">
                  {contents
                    .filter((content) => {
                      if (searchTerm == "") {
                        return content;
                      } else if (
                        content.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||                         content.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) 
                      ) {
                        return content;
                      }
                    })
                    .map((content) =>
                      content.video ? (
                        <Link to={`/library/video/${content.id}`}>
                          <div key={content.id} className="content-item ">
                            <div className="column">
                              <img src={content.icon} className="image-content"></img>
                              <h4 className="content-title">{content.title}</h4>
                              <h5 className="content-description">
                                {content.description}
                              </h5>

                              <div className="row content-icons-area">
                                {content.liked ? (
                                  <FaIcons.FaHeart
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegHeart
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}

                                {content.viewed ? (
                                  <FaIcons.FaEye
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegEye
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}
                                {content.saved ? (
                                  <FaIcons.FaBookmark
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegBookmark
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : null
                    )}
                </div>
              </ScrollPanel>
            </div>

            <div className="library-container">
              <br />
              Receitas
              <ScrollPanel
                style={{ width: "100%", height: "100%" }}
                className="custom"
              >
                <div className="row ">
                  {contents
                    .filter((content) => {
                      if (searchTerm == "") {
                        return content;
                      } else if (
                        content.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||                         content.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) 
                      ) {
                        return content;
                      }
                    })
                    .map((content) =>
                      content.recipe ? (
                        <Link to={`/library/recipe/${content.id}`}>
                          <div key={content.id} className="content-item ">
                            <div className="column">
                              <img src={content.icon} className="image-content"></img>
                              <h4 className="content-title">{content.title}</h4>
                              <h5 className="content-description">
                                {content.description}
                              </h5>

                              <div className="row content-icons-area">
                                {content.liked ? (
                                  <FaIcons.FaHeart
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegHeart
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}

                                {content.viewed ? (
                                  <FaIcons.FaEye
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegEye
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}
                                {content.saved ? (
                                  <FaIcons.FaBookmark
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegBookmark
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : null
                    )}
                </div>
              </ScrollPanel>
            </div>

            <div className="library-container">
              <br />
              Artigos
              <ScrollPanel
                style={{ width: "100%", height: "100%" }}
                className="custom"
              >
                <div className="row ">
                  {contents
                    .filter((content) => {
                      if (searchTerm == "") {
                        return content;
                      } else if (
                        content.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||                         content.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) 
                      ) {
                        return content;
                      }
                    })
                    .map((content, key) =>
                      content.text ? (
                        <Link to={`/library/text/${content.id}`}>
                          <div key={key} className="content-item ">
                            <div className="column">
                              <img src={content.icon} className="image-content"></img>
                              <h4 className="content-title">{content.title}</h4>
                              <h5 className="content-description">
                                {content.description}
                              </h5>

                              <div className="row content-icons-area">
                                {content.liked ? (
                                  <FaIcons.FaHeart
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegHeart
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}

                                {content.viewed ? (
                                  <FaIcons.FaEye
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegEye
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}
                                {content.saved ? (
                                  <FaIcons.FaBookmark
                                    className="content-icon"
                                    size="2rem"
                                  />
                                ) : (
                                  <FaIcons.FaRegBookmark
                                    className="content-icon"
                                    size="2rem"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : null
                    )}
                </div>
              </ScrollPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Library;
