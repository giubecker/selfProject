import { React, useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { useParams, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "./LibraryRecipe.css";

export const LibraryRecipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [action, setAction] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9002/library/${id}`).then((response) => {
      setRecipe(response.data);
      console.log(response.data);
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

            <div className="row image-title-icons">
              <img className="recipe-image" src={recipe.icon}></img>
              <div className="column header">
                <div className="row text-title"> {recipe.title}</div>

                <div className="row icons-area">
                  {
                    <button
                      className="action-icon"
                      name={"liked"}
                      onClick={() => {
                        setAction(!action);
                        axios
                          .patch(`http://localhost:9002/library/${id}`, {
                            liked: !recipe.liked,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {recipe.liked ? (
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
                            viewed: !recipe.viewed,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {" "}
                      {recipe.viewed ? (
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
                            saved: !recipe.saved,
                          })
                          .then((response) => {
                            console.log(response);
                          });
                      }}
                    >
                      {" "}
                      {recipe.saved ? (
                        <FaIcons.FaBookmark size="2rem" />
                      ) : (
                        <FaIcons.FaRegBookmark size="2rem" />
                      )}
                    </button>
                  }
                </div>
              </div>
            </div>

            <div className="row body-recipe">
              {" "}
              <div className="column ingridients">
                <label htmlFor="ingredients">Igredientes:</label>
                <ul id="ingredients">
                  {console.log(recipe.ingredients)}
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                </ul>
              </div>
              <div className="column prepare">
                <label htmlFor="prepare"> Modo de Preparo:</label>
                <div id="prepare">
                  {recipe.prepare &&
                    recipe.prepare &&
                    recipe.prepare.map((step) => <div>{step}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LibraryRecipe;
