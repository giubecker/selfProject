import { React, useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { useParams, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "./LibraryRecipe.css";
import Capa from "../../assets/capa.png";

export const LibraryRecipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [liked, setLiked] = useState(false);
  const [viewed, setViewed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9002/library/${id}`).then((response) => {
      setRecipe(response.data);
      console.log(response.data);
    });
  }, []);

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

            <div className="row image-title-icons">
 <img className="recipe-image" src={Capa}>

 </img>
              <div className="column header">
                <div className="row text-title">
                  {" "}
                  {recipe.title}
                </div>

                <div className="row icons-area">
                  {
                    <button
                      className="action-icon"
                      name="liked"
                      value={liked}
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

            <div className="row body-recipe">
              {" "}
              <div className="column ingridients">
                Igredientes:
                <ul>
                  {console.log(recipe.ingredients)}
                  {recipe.ingreditents &&
                    recipe.ingredients.map((ingredient) => (
                      <div>
                        <li>{ingredient}</li>
                        {ingredient}
                      </div>
                    ))}
                </ul>
              </div>
              <div className="column prepare">Modo de Preparo:</div>
                {recipe.prepare &&
                  recipe.prepare &&
                  recipe.prepare.map((step) => <div>{step}</div>)}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LibraryRecipe;
