import {ModelsActionTypes} from "./action-types";
import {InferActionsType} from "../store";
import {Nullable} from "../../types";
import {SketchfabClientTypes} from "../../client/SketchfabClient/sketchfabClient-types";

export const modelsActionCreators = {

    setModels: (payload: Nullable<SketchfabClientTypes.Model[]>) => ({
        type: ModelsActionTypes.SET_MODELS,
        payload,
    } as const),

    setFetching: (payload: boolean) => ({
        type: ModelsActionTypes.SET_FETCHING,
        payload,
    } as const),

}

export type ModelsActionCreatorsType = InferActionsType<typeof modelsActionCreators>;
