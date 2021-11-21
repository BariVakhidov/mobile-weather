import {axiosInstance} from '../index';
import {SketchfabClientTypes} from './sketchfabClient-types';
import {ClientURLs} from '../../constants/clientURLs'; //TODO: change src name

export const sketchfabClient = {
  getModels(
    params: Partial<SketchfabClientTypes.SearchModelsParams>,
  ): Promise<SketchfabClientTypes.SearchModelsResponse> {
    return axiosInstance
      .get<SketchfabClientTypes.SearchModelsResponse>(
        ClientURLs.MODELS_SEARCH,
        {params},
      )
      .then(response => response.data);
  },

  getCategories(): Promise<SketchfabClientTypes.CategoriesResponse> {
    return axiosInstance
      .get<SketchfabClientTypes.CategoriesResponse>(ClientURLs.CATEGORIES)
      .then(response => response.data);
  },
};
