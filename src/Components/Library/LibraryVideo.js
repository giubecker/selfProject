import { React, useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { Link, useParams, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "./LibraryVideo.css";

export const LibraryVideo = () => {
  const { id } = useParams();
  const history = useHistory();
  const [viewed, setViewed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [video, setVideo] = useState({});
  const [values, setValues] = useState({});

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  useEffect(() => {
    axios.get(`http://localhost:9002/library/${id}`).then((response) => {
      setVideo(response.data);
      console.log(video);
    });
  }, []);

  const [liked, setLiked] = useState(video.liked);

  //   useEffect(() => {
  //     axios.put(`http://localhost:9002/library/${id}`, { liked: liked })
  //     console.log(video)

  // }, [setLiked]);

  // useEffect(() => {
  //   axios.post(`http://localhost:9002/library/${id}`, values);
  // }, [liked, setLiked]);

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }
  // function onSubmit(event) {
  //   event.preventDefault();
  //   axios.post(`http://localhost:9002/library/${id}`, values);
  // }

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <div className="column">
            <button
              className="my-library-link"
              onClick={() => history.goBack()}
            >
              <FaIcons.FaArrowLeft /> Voltar
            </button>
            <div className="row video-area">
              <iframe
                className="video-content"
                width="620"
                height="315"
                src={video.body}
              ></iframe>
            </div>

            <div className="row">
              <div className="column">
                <div className="row video-title"> {video.title}</div>
                <div className="row icons-area">
                  <form //onSubmit={onSubmit}
                  >
                    {
                      <button
                        className="action-icon"
                        name={"liked"}
                        //onChange={onChange}
                        //value={liked}
                        onClick={() => setLiked(!liked)}
                      >
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
                  </form>
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
