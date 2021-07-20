import { React, useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { useParams, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "./LibraryText.css";

export const LibraryText = () => {
  const history = useHistory();
  const { id } = useParams();
  const [action, setAction] = useState(false);
  const [text, setText] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9002/library/${id}`).then((response) => {
      setText(response.data);
      console.log(response.data);
    });
  }, [action]);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
        <div className="column">
          <div className="text-content">
            <div className="row back-button">
              <button
                className="my-library-link"
                onClick={() => history.goBack()}
              >
                <FaIcons.FaArrowLeft /> Voltar
              </button>
            </div>
            <div className="row image-title-icons">
              <img className="recipe-image" src={text.icon}></img>
              <div className="column header">
                <div className="row text-title"> {text.title}</div>
                <h5> fonte: {text.author}</h5>

                <div className="row icons-area">
                  {
                    <button
                      className="action-icon"
                      onClick={() => {
                        setAction(!action);
                        axios
                          .patch(`http://localhost:9002/library/${id}`, {
                            liked: !text.liked,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {" "}
                      {text.liked ? (
                        <FaIcons.FaHeart size="2rem" />
                      ) : (
                        <FaIcons.FaRegHeart size="2rem" />
                      )}
                    </button>
                  }
                  {
                    <button
                      className="action-icon"
                      onClick={() => {
                        setAction(!action);
                        axios
                          .patch(`http://localhost:9002/library/${id}`, {
                            viewed: !text.viewed,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {" "}
                      {text.viewed ? (
                        <FaIcons.FaEye size="2rem" />
                      ) : (
                        <FaIcons.FaRegEye size="2rem" />
                      )}
                    </button>
                  }
                  {
                    <button
                      className="action-icon"
                      onClick={() => {
                        setAction(!action);
                        axios
                          .patch(`http://localhost:9002/library/${id}`, {
                            saved: !text.saved,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {" "}
                      {text.saved ? (
                        <FaIcons.FaBookmark size="2rem" />
                      ) : (
                        <FaIcons.FaRegBookmark size="2rem" />
                      )}
                    </button>
                  }
                </div>
              </div>
            </div>

            <div className="body-text"> {text.body}</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LibraryText;
