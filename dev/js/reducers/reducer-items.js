export default (state = [], action) => {
    switch (action.type) {
        case "ADD_INVENTORY":
            return [
                ...state,
                action.payload
            ]
            break;
        case "DELETE_ITEM":
            return state = action.payload;
            break;
        case 'FETCH_ITEM':
            return state = action.payload;
            break;
        default:
            return state;
            break;
    }
}