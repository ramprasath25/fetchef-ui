let intialState = { Diet: { data: '' }, Cusine: { data: '' }, Exclude: { data: '' }, Intolerance: { data: '' } };
export default (state = intialState, action) => {
    switch (action.type) {
        case 'USER_DIET':
            const newState = { ...state };
            newState.Diet.data = action.payload.data;
            return newState;
            break;
        case 'USER_CUSINE':
            const cusineState = { ...state };
            cusineState.Cusine.data = action.payload.data;
            return cusineState;
            break;
        case 'USER_INTOLERANCE':
            const intoleranceState = { ...state };
            intoleranceState.Intolerance.data = action.payload.data;
            return intoleranceState;
            break;
        case 'USER_EXCLUDE':
            const excludeState = { ...state };
            excludeState.Exclude.data = action.payload.data;
            return excludeState;
            break;
        case 'FETCH_SETTINGS':
            let settingState = { ...state };
            settingState = action.payload.map((element) => {
                if (element.type == 'Diet') {
                    settingState.Diet.data = element.data
                } if (element.type == 'Cusine') {
                    settingState.Cusine.data = element.data
                } if (element.type == 'Exclude') {
                    settingState.Exclude.data = element.data
                } if (element.type == 'Intolerance') {
                    settingState.Intolerance.data = element.data
                }
                return settingState;
            })[0];
            console.log(JSON.stringify(settingState))
            return settingState;
            break;
        default:
            return state;
            break;
    }
}