import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from "react-redux";

import {store} from "./redux/store";
import Global from "./components/styled/global";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

