import App from './App';
import * as serviceWorker from './serviceWorker';

import './firebase/app'
import React from 'react';

React.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')

);

serviceWorker.unregister();