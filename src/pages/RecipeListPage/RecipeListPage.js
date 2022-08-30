import React from "react"
// import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { AddRecipeButton, RecipeListContainer } from "./styled";
import { goToAddRecipes, goToRecipesDetail } from "../../routes/cordinator";
import { useNavigate } from 'react-router-dom';
import Loading from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useUnProtectedPage";


const RecipeListPage = () => {
    useProtectedPage()
    const navigate =useNavigate()
     
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const onClickCard = (id) => {
       goToRecipesDetail(navigate,id)
        
    }
    
    const recipeCards = recipes.map((recipe)=>{
        return <RecipeCard
         title={recipe.title}
         image={recipe.image}
         recipe_id={recipe.recipe_id}
         onClickCard={ ()=> onClickCard(recipe.recipe_id)}
         />
     
    })
    return (
        <RecipeListContainer>
            {recipeCards.length > 0 ? recipeCards : <Loading/>}
         <AddRecipeButton 
         color="primary"
         onClick={()=>goToAddRecipes(navigate)}>
        +
         </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipeListPage