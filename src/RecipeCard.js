import { Card, Button } from "react-bootstrap";
import "./RecipeCard.css";

const CardMeal = ({ image, name, link }) => {
  return (
    <div id="card">
      <div className="slide">
        <div className="content">
          <img src={image} alt="recipe_image" />
        </div>
      </div>
      <div className="slide slide2">
        <div className="content">
          <h3>{name}</h3>
          <a href={link} target="_blank noreferrer">
            <button id="btn" type="button">
              Recipe
            </button>
            <div id="circle"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
