export var featuredpostInitialState = {
    loading: true,
    payload: {},
    error: null
}

export function featuredpostReducer (state, action){
    switch (action.type.toUpperCase()) {
        case "SUCCESS":
            return {
                loading: false,
                payload: action.payload, 
                error: null
            }
        case "FAIL":
            return {
                loading: false,
                payload: {},
                error: action.error_message
            }
        
        default:
            return state;
    }
}