import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store/configureStore';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);

serviceWorker.register();
