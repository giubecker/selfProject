import { React, useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { useParams, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Capa from "../../assets/capa.png";
import axios from "axios";
import "./LibraryText.css";

export const LibraryText = () => {
  const history = useHistory();
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [viewed, setViewed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [text, setText] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9002/library/${id}`).then((response) => {
      setText(response.data);
      console.log(response.data);
      setLiked(text.liked);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <div className="column text-content">
            <button
              className="my-library-link"
              onClick={() => history.goBack()}
            >
              <FaIcons.FaArrowLeft /> Voltar
            </button>
            <div className="row image-title-icons">
              <img className="recipe-image" src={Capa}></img>
              <div className="column header">
                <div className="row text-title"> {text.title}</div>
                <h5>{text.author}</h5>

                <div className="row icons-area">
                  {
                    <button
                      className="action-icon"
                      onClick={() => {
                        setLiked(!liked);
                      }}
                    >
                      {" "}
                      {liked ? (
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
                        setViewed(!viewed);
                      }}
                    >
                      {" "}
                      {viewed ? (
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
                        setSaved(!saved);
                      }}
                    >
                      {" "}
                      {saved ? (
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
    </>
  );
};
export default LibraryText;
