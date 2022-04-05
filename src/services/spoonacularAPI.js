import axios from "axios";

const endPoints = {
  complexSearch: "https://api.spoonacular.com/recipes/complexSearch",
  randomRecipes: "https://api.spoonacular.com/recipes/random?",
};
const apiKey = "apiKey=f13099a5551c41cca7a2eb45a236e934";

export const apiRandomData = async (limit = 10) => {
  let endPointString = endPoints.randomRecipes + `number=${limit}&` + apiKey;
  console.log(endPointString);
  let data = await axios
    .get(endPointString)
    .then((res) => {
      console.log(res.data);
      sessionStorage.setItem("recipes", JSON.stringify(res.data));
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

export const getRandomData = async (limit = 10) => {
  return new Promise((resolve, reject) => {
    let data = sessionStorage.getItem("recipes") || null;
    if (!!data) {
      setTimeout(() => resolve(JSON.parse(data)), 2000);
    } else {
      setTimeout(async () => {
        let apiDataAux = await apiRandomData();
        console.log("DATOS DE API: ", apiDataAux);
        resolve(apiDataAux);
      }, 2000);
    }
  });
};

export const getRecipeById = (id) => {
  return new Promise((resolve, reject) => {
    let dataArray = JSON.parse(sessionStorage.getItem("recipes")) || [];
    console.log("DATO PUTO", dataArray);
    let data = dataArray.filter((e) => e.id == id);
    resolve(data[0]);
  });
};
