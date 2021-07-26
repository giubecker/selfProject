import { React, useEffect, useState } from "react";
import Sidebar from "../System/Sidebar";
import * as FaIcons from "react-icons/fa";
import "./MyLibrary.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export const MyLibrary = () => {
  const history = useHistory();
  const [myLibrary, setMyLibrary] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9002/library").then((response) => {
      setMyLibrary(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>MATERIAL DIDÁTICO</p>
          <h4>Minha Biblioteca</h4>
          <div className="library-header">
            <div className="my-library-link">
              <button
                className="my-library-link"
                onClick={() => history.goBack()}
              >
                <FaIcons.FaArrowLeft /> Voltar
              </button>
            </div>{" "}
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
              <div className="row ">
                {myLibrary
                  .filter((content) => {
                    if (searchTerm == "") {
                      return content;
                    } else if (
                      content.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      content.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return content;
                    }
                  })
                  .map((content, key) =>
                    content.saved ? (
                      <Link to={ content.video ? `/library/video/${content.id}` : content.text? `/library/text/${content.id}` : `/library/recipe/${content.id}`}  style={{ textDecoration: 'none' }}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyLibrary;
