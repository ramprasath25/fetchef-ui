import { isLoggedIn } from '../authorization';

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const addItem = (formData) => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    const inventoryData = formData;
    inventoryData.userId = loginUserDetails._id;
    fetch('http://localhost:8081/user/inventory', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        },
        body: JSON.stringify(inventoryData)
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: 'ADD_INVENTORY',
                payload: response.data
            })
        );
}
export const deleteItem = (id) => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    let inventoryData = {};
    inventoryData.userId = loginUserDetails._id;
    fetch('http://localhost:8081/user/inventory/' + id, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        },
        body: JSON.stringify(inventoryData)
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: 'DELETE_ITEM',
                payload: response.data
            })
        );
}
export const getItems = () => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    fetch('http://localhost:8081/user/inventory/' + loginUserDetails._id, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        }
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: 'FETCH_ITEM',
                payload: response.data
            })
        );
}
export const userLogin = (loginDetails) => (dispatch) => {
    fetch('http://localhost:8081/login',
        {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loginDetails)
        })
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: 'USER_LOGIN',
                payload: data
            })
        );
}
export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}
export const addDiet = (formData) => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    const dietData = {};
    dietData.data = formData;
    dietData.userId = loginUserDetails._id;
    dietData.type = "Diet";
    fetch('http://localhost:8081/user/diet', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        },
        body: JSON.stringify(dietData)
    })
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: 'USER_DIET',
                payload: response.data
            })
        })
}
export const addCusine = (formData) => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    const cusineData = {}
    cusineData.data = formData;
    cusineData.userId = loginUserDetails._id;
    cusineData.type = "Cusine";
    fetch('http://localhost:8081/user/cusine', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        },
        body: JSON.stringify(cusineData)
    }).then(res => res.json())
        .then(response => {
            dispatch({
                type: 'USER_CUSINE',
                payload: response.data
            })
        })
}

export const addIntolerance = (formData) => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    const intoleranceData = {}
    intoleranceData.data = formData;
    intoleranceData.userId = loginUserDetails._id;
    intoleranceData.type = "Intolerance";
    fetch('http://localhost:8081/user/intolerance', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        },
        body: JSON.stringify(intoleranceData)
    }).then(res => res.json())
        .then(response => {
            dispatch({
                type: 'USER_INTOLERANCE',
                payload: response.data
            })
        })
}

export const addExclude = (formData) => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    const excludeData = {};
    excludeData.data = formData;
    excludeData.userId = loginUserDetails._id;
    excludeData.type = "Exclude";
    fetch('http://localhost:8081/user/exclude', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        },
        body: JSON.stringify(excludeData)
    }).then(res => res.json())
        .then(response => {
            dispatch({
                type: 'USER_EXCLUDE',
                payload: response.data
            })
        })
}
//Get Settings
export const getSettings = () => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    fetch('http://localhost:8081/user/settings/' + loginUserDetails._id, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        }
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: 'FETCH_SETTINGS',
                payload: response.data
            })
        );
}
// Getting Recipe
export const getRecipeList = () => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    fetch('http://localhost:8081/user/getRecipeList/' + loginUserDetails._id, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        }
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: 'FETCH_RECIPELIST',
                payload: response.data
            })
        );
}
// Getting Recipe Details
export const getRecipeDetails = (params) => (dispatch) => {
    const loginUserDetails = isLoggedIn();
    const recipeData = {
        recipeId: params.id
    }
    fetch('http://localhost:8081/user/getRecipeDetails/' + loginUserDetails._id, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': loginUserDetails.token
        },
        body: JSON.stringify(recipeData)
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: 'FETCH_RECIPEDETAILS',
                payload: response.data
            })
        );
}