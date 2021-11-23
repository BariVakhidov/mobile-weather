import React, {FC, memo} from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {App} from "./App";

export const AppWrapper: FC = memo(() => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
});
