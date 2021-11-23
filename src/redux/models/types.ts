import {Nullable} from "../../types";
import {SketchfabClientTypes} from "../../client/SketchfabClient/sketchfabClient-types";

export namespace ModelsTypes {

    export interface ModelsState {
        models: Nullable<SketchfabClientTypes.Model[]>;
        isFetching: boolean;
    }

}
