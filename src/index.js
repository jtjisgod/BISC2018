import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

ReactDOM.render((
    <React.Fragment>
        <App/>
    </React.Fragment>
), document.getElementById('root'));

serviceWorker.unregister();

