import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {appReducer} from "./app/reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {modelsReducer} from "./models/reducer";

const rootReducer = combineReducers({
    app: appReducer,
    models: modelsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>

export const useAppDispatch = () => useDispatch(); //TODO: AppThunk type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;
