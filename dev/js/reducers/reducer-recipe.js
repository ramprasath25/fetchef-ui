let intialState = { recipeList: { results: [], basUri: '' }, recipeDetails: { extendedIngredients: [], cuisines: [], diets: [] } }
export default (state = intialState, action) => {
    switch (action.type) {
        case 'FETCH_RECIPELIST':
            return { ...state, recipeList: (Object.keys(action.payload).length !== 0) ? action.payload : { results: [], basUri: '' } };
            break;
        case 'FETCH_RECIPEDETAILS':
            return { ...state, recipeDetails: action.payload };
            break;
        default:
            return state;
            break;
    }
}