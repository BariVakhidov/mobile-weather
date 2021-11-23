import {AppTypes} from "./types";
import {Reducer} from "redux";
import {AppActionCreatorsType} from "./action-creators";
import {AppActionTypes} from "./action-types";

const initialState: Readonly<AppTypes.AppState> = {
    user: null,
    isFetching: false,
    initialized: false,
    error: null,
}

export const appReducer: Reducer<AppTypes.AppState, AppActionCreatorsType> = (state = initialState, action) => {
    switch (action.type) {
        case AppActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case AppActionTypes.SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case AppActionTypes.INITIALIZE_APP:
            return {
                ...state,
                initialized: true,
            }
        case AppActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case AppActionTypes.CLEANUP:
            return initialState;
        default:
            return state;
    }
}
