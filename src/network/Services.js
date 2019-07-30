import axios from 'axios';

const BASE_URL = "https://www.food2fork.com/api/";
const API_KEY = "767de86f8ea74854742098dacb4e2271"

export const searchRecipes = async (query) =>{
    const URL = `${BASE_URL}/search?key=${API_KEY}&q=${query}`;
    try{
        const response = await axios.get(URL);
        const recipes = response.data.recipes;
        return recipes;
    }catch(error){
        console.log(error);
        return null;
    }
}