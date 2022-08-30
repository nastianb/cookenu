import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage';
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage';
import RecipeListPage from '../pages/RecipeListPage/RecipeListPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const Router = ({rightButtonText,setRightButtonText}) => {
  return (
    
      <Routes>
        <Route index element={<RecipeListPage/>} />
        <Route path='/login' element={< LoginPage setRightButtonText={setRightButtonText}/>} />
        <Route path='/cadastro' element={< SignUpPage setRightButtonText={setRightButtonText}/>} />
        <Route path="/adicionar-receita" element={< AddRecipesPage/>} />
        <Route path="/detalhe/:id" element={< RecipeDetailPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
  );
};

export default Router