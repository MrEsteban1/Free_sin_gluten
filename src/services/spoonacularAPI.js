import axios from "axios";

const endPoints = {
  complexSearch: "https://api.spoonacular.com/recipes/complexSearch",
  randomRecipes: "https://api.spoonacular.com/recipes/random?",
};
const apiKey = "apiKey=f13099a5551c41cca7a2eb45a236e934";

const apiRandomData = (limit = 10) => {
  let endPointString = endPoints.randomRecipes + `number=${limit}&` + apiKey;
  console.log(endPointString);
  axios
    .get(endPointString)
    .then((res) => {
      console.log(res.data);
      sessionStorage.setItem("recipes", JSON.stringify(res.data));
      return JSON.parse(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRandomData = async (limit = 10) => {
  return new Promise((resolve, reject) => {
    let data = sessionStorage.getItem("recipes") || null;
    if (!!data) {
      setTimeout(() => resolve(JSON.parse(data)), 2000);
    } else {
      setTimeout(() => resolve(apiRandomData()), 2000);
    }
  });
};

export const getRecipeById = (id) => {
  return new Promise((resolve, reject) => {
    let dataArray = JSON.parse(sessionStorage.getItem("recipes")) || [];
    let data = dataArray.recipes.filter((e) => (e.id == id)) 
    resolve(data[0]);
  });
};
