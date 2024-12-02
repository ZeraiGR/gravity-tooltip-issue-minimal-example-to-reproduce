import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@gravity-ui/uikit';
import { Provider } from 'react-redux';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import App from './App';

import store from './store.js';

const container = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme="light">
            <App />
        </ThemeProvider>
    </Provider>
), container);