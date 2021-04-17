import React, { useState, useEffect } from "react";
import axios from "axios";
import MealList from "./components/MealList";
import "./styles/MealPlanner.css";
import Filter from "./components/Filter";

const API_ID = process.env.REACT_APP_EDAMAM_API_ID;
const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

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

const MealPlanner = ({ user }) => {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [diet, setDiet] = useState(""); //by default the diet will be standard

  const URL = `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}q=&health=${diet}&from=0&to=30&`;

  useEffect(() => {
    axios
      .get(URL + `dishType=main&mealType=breakfast`)
      .then((res) => {
        setBreakfast(res.data.hits);
      })
      .catch(console.log);
  }, [diet]);

  useEffect(() => {
    axios
      .get(URL + `dishType=main&mealType=lunch`)
      .then((res) => {
        setLunch(res.data.hits);
        console.log(diet);
      })
      .catch(console.log);
  }, [diet]);

  useEffect(() => {
    axios
      .get(URL + `dishType=main&mealType=dinner`)
      .then((res) => {
        setDinner(res.data.hits);
        console.log(diet);
      })
      .catch(console.log);
  }, [diet]); //it will only render if the user filters the diet type

  const onFilterChange = (e) => {
    setDiet(e.target.value);
  };

  return (
    <div className="plan_container">
      <Filter //Added a filter option for standard, vegetarian and vegan
        onFilterChange={onFilterChange}
      />

      <h2>Breakfast</h2>
      <div id="breakfast">
        {/* Recipes will be displayed by the MealList component, passing breakfast,lunch and dinner arrays as props */}
        {/* Conditional Rendering.Only output MealList when we have a value for breakfast. */}
        <MealList props={breakfast} user={user} />
      </div>
      <h2>Lunch</h2>
      <div id="lunch">
        <MealList props={lunch} user={user} />
      </div>
      <h2>Dinner</h2>
      <div id="dinner">
        <MealList props={dinner} user={user} />
      </div>
    </div>
  );
};

export default MealPlanner;
