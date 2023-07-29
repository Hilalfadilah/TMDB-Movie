const initialState = {
    favorites: [],
    loading: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: action.payload,
            };
        case "START_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        case "STOP_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};