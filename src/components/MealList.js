import CardMeal from "./RecipeCard";
import "../styles/MealList.css";

//Function the shuffle arrays
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

//We got the recipes arrays for meals, but we need to shuffle the recipes in order to not to show the same recipes everytime.
// If we get only 7 recipes for meals, we will not have diversity. So we can get 40 meal and then slice to display only 7
// We will map each array and create a cardMeal for each recipe
const MealList = ({ props, user }) => {
  const shuffleMealList = shuffleArray(props);
  const sevenDaysMeal = shuffleMealList.slice(0, 7);
  const finalMealList = props.length ? (
    sevenDaysMeal.map((recipe) => {
      return (
        <CardMeal
          image={recipe.recipe.image}
          name={recipe.recipe.label}
          link={recipe.recipe.url}
          ingredients={recipe.recipe.ingredientLines}
          user={user}
        />
      );
    })
  ) : (
    <div>
      {" "}
      <p>Meals are cooking...</p>{" "}
    </div>
  );

  return <div className="meallist">{finalMealList}</div>;
};

export default MealList;
