import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
