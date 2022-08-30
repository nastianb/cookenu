import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { RecipeCardContainer, RecipeCardContent } from "./styled";

const RecipeCard= ({ title, image, recipe_id, onClickCard }) => {
 
  return (
    <RecipeCardContainer onClick={onClickCard} >
      <CardMedia
        key={recipe_id}
        component={"img"}
        alt={title}
        height={"150px"}
        image={image}
        title={title}
      />
      <RecipeCardContent>
        <Typography align={'center'} component="div">
          {title}
        </Typography>
      </RecipeCardContent>
    </RecipeCardContainer>
  );
}
export default  RecipeCard