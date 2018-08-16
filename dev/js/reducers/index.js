import { combineReducers } from 'redux';
import loginDetails from './reducer-login';
import items from './reducer-items';
import settings from './reducer-settings';
import recipe from './reducer-recipe';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as formReducer } from 'redux-form';

/* Combine All Reducers */
const allReducers = combineReducers({
    items: items,
    settings: settings,
    loadingBar: loadingBarReducer,
    loginDetails: loginDetails,
    recipe: recipe,
    form: formReducer
});

export default allReducers;
