import {
    FETCH_COIN_DATA,
    FETCH_COIN_DATA_SUCCESS,
    FETCH_COIN_DATA_FAIL
} from './../Utils/ActionTypes'

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
}

export default function (state = [], action) {
    
    switch(action.type) {

        case FETCH_COIN_DATA:
            return { 
                ...state,
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            }

        case: FETCH_COIN_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            }

        default:
            return state

    }
    
}