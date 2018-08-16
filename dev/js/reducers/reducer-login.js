export default (state={}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            localStorage.setItem('loginDetails', JSON.stringify(action.payload));
            return {
                ...state,
                loginDetails: action.payload
            }
            break;
        case 'USER_LOGOUT' :
            localStorage.removeItem('loginDetails');
            return state = {}
        default:
            return state;
            break;
    }
}