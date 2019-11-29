import axios from 'axios';
import * as AppConfig from '../utils/AppConfig';
const BASE_URL = "http://127.0.0.1:3000";

export const searchRecipes = async (query, page =0, pageSize=AppConfig.recipeResultsPerPage) =>{
    const URL = `${BASE_URL}/recipes?search=${query}&page=${page}&pageSize=${pageSize}`;
    console.log('searchRecipes',URL);
    try{
        const response = await axios.get(URL);
        const result = response.data;
        console.log('searchRecipes',result);
        return result;
    }catch(error){
        console.log(error.message);
        return null;
    }
}

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