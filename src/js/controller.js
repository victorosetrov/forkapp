const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const showRecipe = async function () {
  try {
  } catch {}
};

fetch('https://api.edamam.com/search');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
