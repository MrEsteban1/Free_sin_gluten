import { axios } from "axios";

const endPoints = {
  complexSearch: "https://api.spoonacular.com/recipes/complexSearch",
  randomRecipes: "https://api.spoonacular.com/recipes/random?",
};
const apiKey = "apiKey=f13099a5551c41cca7a2eb45a236e934";

export const getRandomData = (name, limit = 10) => {
  let endPointString = endPoints.randomRecipes + `number=${limit}` + apiKey;
  axios
    .get(endPointString)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("recipes", JSON.stringify(res.data.results));
    })
    .catch((err) => {
      console.log(err);
    });
};
