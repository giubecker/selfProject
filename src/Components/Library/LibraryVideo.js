import { React, useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { useParams, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "./LibraryVideo.css";
import ReactPlayer from "react-player";

export const LibraryVideo = () => {
  const { id } = useParams();
  const history = useHistory();
  const [action, setAction] = useState(false);
  const [video, setVideo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9002/library/${id}`).then((response) => {
      setVideo(response.data);
    });
  }, [action]);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <div className="column">
            <div className="row back-button">
              <button
                className="my-library-link"
                onClick={() => history.goBack()}
              >
                <FaIcons.FaArrowLeft /> Voltar
              </button>
            </div>
            <div className="row video-area">
              <ReactPlayer controls={true} url={video.body} />
            </div>

            <div className="row">
              <div className="column">
                <div className="row video-title"> {video.title}</div>
                <div className="row icons-area">
                  {
                    <button
                      className="action-icon"
                      title="curtir"
                      name={"liked"}
                      onClick={() => {
                        setAction(!action);
                        axios
                          .patch(`http://localhost:9002/library/${id}`, {
                            liked: !video.liked ,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {video.liked ? (
                        <FaIcons.FaHeart size="2rem" />
                      ) : (
                        <FaIcons.FaRegHeart size="2rem" />
                      )}
                    </button>
                  }
                  {
                    <button
                      className="action-icon"
                      title="visto"
                      onClick={() => {
                        setAction(!action);
                        axios
                          .patch(`http://localhost:9002/library/${id}`, {
                            viewed: !video.viewed,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {" "}
                      {video.viewed ? (
                        <FaIcons.FaEye size="2rem" />
                      ) : (
                        <FaIcons.FaRegEye size="2rem" />
                      )}
                    </button>
                  }
                  {
                    <button
                      className="action-icon"
                      title="salvar"
                      onClick={() => {
                        setAction(!action);
                        axios
                          .patch(`http://localhost:9002/library/${id}`, {
                            saved: !video.saved,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {" "}
                      {video.saved ? (
                        <FaIcons.FaBookmark size="2rem" />
                      ) : (
                        <FaIcons.FaRegBookmark size="2rem" />
                      )}
                    </button>
                  }
                </div>
              </div>
              <div className="column video-description">
                {" "}
                <h5> {video.description}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LibraryVideo;
