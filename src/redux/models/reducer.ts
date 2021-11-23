import {ModelsTypes} from "./types";
import {Reducer} from "redux";
import { ModelsActionCreatorsType} from "./action-creators";
import {ModelsActionTypes} from "./action-types";

const initialState: Readonly<ModelsTypes.ModelsState> = {
    models: null,
    isFetching: false,
}

export const modelsReducer: Reducer<ModelsTypes.ModelsState, ModelsActionCreatorsType> = (state = initialState, action) => {
    switch (action.type) {
        case ModelsActionTypes.SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case ModelsActionTypes.SET_MODELS:
            return {
                ...state,
                models: action.payload,
            }
        default:
            return state;
    }
}
