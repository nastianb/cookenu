import { Typography } from "@mui/material";
import * as  React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddRecipesForm from "./AddRecipesForm";
import { RecipeContainer, ScreenContainer } from "./styled";

const AddRecipesPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
        <RecipeContainer>
          <Typography gutterBottom variant={"h4"}  align={'center'} color={'textPrimary'} >Adicionar nova Receita</Typography>
          <AddRecipesForm/>
        </RecipeContainer>
    </ScreenContainer>
  )
};

export default AddRecipesPage;
