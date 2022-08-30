export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToSignUp = (navigate) => {
    navigate('/cadastro')
}

export const goToAddRecipes = (navigate) => {
    navigate('/adicionar-receita')
}
export const goToRecipesDetail = (navigate,id) => {
    navigate(`/detalhe/${id}`)
}

export const goToRecipesList = (navigate) => {
    navigate('/')
}