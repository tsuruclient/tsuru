import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-virtualized/styles.css'

import store from './redux/store';
import App from './container/App';

ReactDOM.render(
    <Provider store={store()}>
            <App />
    </Provider>,
    document.getElementById('root'),
);
