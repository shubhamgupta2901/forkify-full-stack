import axios from 'axios';

const BASE_URL = "http://127.0.0.1:3000";

export const searchRecipes = async (query) =>{
    const URL = `${BASE_URL}/recipes?search=${query}`;
    console.log('searchRecipes',URL);
    try{
        const response = await axios.get(URL);
        const recipes = response.data.recipes;
        console.log('searchRecipes',recipes);
        return recipes;
    }catch(error){
        console.log(error.message);
        return null;
    }
}


/**
{
  "recipe": {
    "publisher": "BBC Good Food",
    "f2f_url": "http://food2fork.com/view/2d286a",
    "ingredients": [
      "2 tbsp olive oil , plus a little for greasing",
      "750g lean beef mince",
      "90g pack prosciutto",
      " quantity tomato sauce (see below)",
      "200ml hot beef stock",
      "a little grated nutmeg",
      "300g fresh pack lasagne sheets",
      " quantity white sauce (see below)",
      "125g ball mozzarella"
    ],
    "source_url": "http://www.bbcgoodfood.com/recipes/10602/classic-lasagne",
    "recipe_id": "2d286a",
    "image_url": "http://static.food2fork.com/10602_MEDIUM0654.jpg",
    "social_rank": 99.99975905444616,
    "publisher_url": "http://www.bbcgoodfood.com",
    "title": "Classic lasagne"
  }
}
 */
export const getRecipe = async (recipeId) => {
    const URL = `${BASE_URL}/recipes/${recipeId}/information`
    try{
        const response = await axios.get(URL);
        return response.data;
    }catch(error){
        console.log(error)
        return null;
    }
}