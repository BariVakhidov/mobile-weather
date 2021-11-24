import {AppActionTypes} from "./action-types";
import {InferActionsType} from "../store";
import {AppTypes} from "./types";
import {Nullable} from "../../types";

export const appActionCreators = {

    setUser: (payload: Nullable<AppTypes.UserInfo>) => ({
        type: AppActionTypes.SET_USER,
        payload,
    } as const),

    initializeApp: () => ({
        type: AppActionTypes.INITIALIZE_APP,
    } as const),

    setFetching: (payload: boolean) => ({
        type: AppActionTypes.SET_FETCHING,
        payload,
    } as const),

    setError: (payload: Nullable<string>) => ({
        type: AppActionTypes.SET_ERROR,
        payload,
    } as const),

    cleanup: () => ({
        type: AppActionTypes.CLEANUP,
    } as const),


}

export type AppActionCreatorsType = InferActionsType<typeof appActionCreators>;
