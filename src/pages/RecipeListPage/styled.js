import styled from  "@emotion/styled"
import { Fab } from "@mui/material"

export const RecipeImage = styled.img`
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`
export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom:20px;
  z-index: 3;
`