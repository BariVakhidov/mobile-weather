import {SketchfabClientTypes} from "../../client/SketchfabClient/sketchfabClient-types";
import {AppThunk} from "../store";
import {modelsActionCreators} from "./action-creators";
import {appActionCreators} from "../app/action-creators";
import {sketchfabClient} from "../../client/SketchfabClient";

export const getModels = (params: Partial<SketchfabClientTypes.SearchModelsParams>): AppThunk => async (dispatch) => {
    dispatch(modelsActionCreators.setFetching(true));
    try {
        const response = await sketchfabClient.getModels(params);
        response.results.forEach(i =>
            i.thumbnails.images.sort((a, b) => b.width - a.width),
        );
        await new Promise<void>(resolve => setTimeout(() => resolve(), 500))
        dispatch(modelsActionCreators.setModels(response.results));
    } catch (e) {
        dispatch(appActionCreators.setError(e));
    } finally {
        dispatch(modelsActionCreators.setFetching(false));
    }
}
