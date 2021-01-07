import React from "react"
import { registerRootComponent } from 'expo';
import {Provider} from "react-redux"
import App from './App';
import store from './src/store/configStore';

const RNRedux = () => {
    return <Provider store={store}>
        <App />
    </Provider>
}

registerRootComponent(RNRedux);
