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
      localStorage.setItem("recipes", JSON.stringify(res.data));
      return JSON.parse(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRandomData = async (limit = 10) => {
  return new Promise((resolve, reject) => {
    let data = localStorage.getItem("recipes") || null;
    if (!!data) {
      resolve(JSON.parse(data));
    } else {
      resolve(apiRandomData());
    }
  });
};
