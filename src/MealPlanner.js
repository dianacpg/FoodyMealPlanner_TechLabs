import React, { Component } from "react";
import axios from "axios";
import CardMeal from "./RecipeCard";
import "./MealPlanner2.css";
import Filter from "./Filter";

const API_ID = process.env.REACT_APP_EDAMAM_API_ID;
const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
const URL = "https://api.edamam.com/search?";

// We have to display 7 breakfasts, 7 lunches and 7 dinners;
// We will get the recipes on the edamame API and use it on the state as an array;
// Problem: We need diversity and not display the array always on the same order; The API doesnt have recipes ID's.
// Possible solution: Get more than 7 meal from the API (ex: 40), Shuffle the array and then create a new array with only 7;
// ex:          [banana, apple, orange, durian, kiwi, cherry, lemon, melon, pumpkin] -> then Reset ->
//               [ apple, kiwi, pumpkin, banana, orange, melon, lemon, cherry, durian] -> Splice to 7 meals ->
//               [ apple, kiwi, pumpkin, banana, orange, melon, lemon]
//In Conclusion: 1º get 40 recipes
//               2º Shuffle the 40 recipes
//               3º Get the first 7 recipes from that shuffled array
// Since we have to display always 7 breakfasts, 7 lunches and 7 dinners I called the API 3 times with the meal types and put the recipes on the State as arrays.

// Function to shuffle arrays
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class MealPlan extends Component {
  //default meal plan
  constructor() {
    super();
    this.state = {
      breakfast: [],
      lunch: [],
      dinner: [],
      diet: "balanced",
      mealType: "breakfast",
      numberMeals: "40",
    };
  }

  //Fetch API for the 3 types of meals (Breakfast, Lunch, Dinner)
  componentDidMount() {
    axios
      .get(
        `${URL}app_id=${API_ID}&app_key=${API_KEY}&q=&diet=${this.state.diet}&mealType=breakfast&from=0&to=${this.state.numberMeals}`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          breakfast: res.data.hits,
        });
      });

    axios
      .get(
        `${URL}app_id=${API_ID}&app_key=${API_KEY}&q=&diet=${this.state.diet}&mealType=lunch&from=0&to=${this.state.numberMeals}&dishType=main`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          lunch: res.data.hits,
        });
      });

    axios
      .get(
        `${URL}app_id=${API_ID}&app_key=${API_KEY}&q=&diet=${this.state.diet}&mealType=dinner&from=0&to=${this.state.numberMeals}&dishType=main`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          dinner: res.data.hits,
        });
      });
  }

  //Adding user preferences
  onHandleRadioButton = (e) => {
    this.setState({ diet: e.target.value });
  };

  //displaying recipes per type of meal
  render() {
    const { breakfast, lunch, dinner, days } = this.state;

    const shuffleBreakfastList = shuffleArray(breakfast); //Since we are display the recipe array elements, i shuffled the array to not show always the same order
    const weeklyBreakfastNumber = shuffleBreakfastList.slice(0, 7); // I asked for 40 recipes and I only want to display 7
    const BreakfastCardList = breakfast.length ? ( // create a recipe card for each recipe
      weeklyBreakfastNumber.map((recipe) => {
        return (
          <CardMeal
            image={recipe.recipe.image}
            name={recipe.recipe.label}
            link={recipe.recipe.url}
            ingredients={recipe.recipe.ingredientLines}
          />
        );
      })
    ) : (
      <div>
        {" "}
        <p>Meals are cooking...</p>{" "}
      </div>
    );

    const shuffleLunchList = shuffleArray(lunch); //Since we are display the recipe array elements, i shuffled the array to not show always the same order
    const weeklyLunchNumber = shuffleLunchList.slice(0, 7); // I asked for 40 recipes and I only want to display 7
    const LunchCardList = lunch.length ? ( // create a recipe card for each recipe
      weeklyLunchNumber.map((recipe) => {
        return (
          <CardMeal
            image={recipe.recipe.image}
            name={recipe.recipe.label}
            link={recipe.recipe.url}
            ingredients={recipe.recipe.ingredientLines}
          />
        );
      })
    ) : (
      <div>
        {" "}
        <p>Meals are cooking...</p>{" "}
      </div>
    );

    const shuffleDinnerList = shuffleArray(dinner); //Since we are display the recipe array elements, i shuffled the array to not show always the same order
    const weeklyDinnerNumber = shuffleDinnerList.slice(0, 7); // I asked for 40 recipes and I only want to display 7
    const DinnerCardList = dinner.length ? ( //   // create a recipe card for each recipe
      weeklyDinnerNumber.map((recipe) => {
        return (
          <CardMeal
            image={recipe.recipe.image}
            name={recipe.recipe.label}
            link={recipe.recipe.url}
            ingredients={recipe.recipe.ingredientLines}
          />
        );
      })
    ) : (
      <div>
        {" "}
        <p>Meals are cooking...</p>{" "}
      </div>
    );

    return (
      <div>
        <h1>Meal Planner Happiness</h1>
        <Filter handleChange={this.onHandleRadioButton} />
        <div id="container">
          <div className="mealtypes">
            {" "}
            <h2> </h2>
          </div>
          <div className="plan_container">
            <div className="days"></div>
            <div className="meals">
              <h2>Breakfast</h2>
              <div id="breakfast">{BreakfastCardList}</div>
              <h2>Lunch</h2>
              <div id="lunch">{LunchCardList}</div>
              <h2>Dinner</h2>
              <div id="dinner">{DinnerCardList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MealPlan;
