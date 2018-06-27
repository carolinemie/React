import React from 'react';
// const React = require('react'); é a mesma coisa que o import do node

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// a linha de cima é mesma coisa que o app.service  porta 3000 do node

ReactDOM.render(<App />, document.querySelector('root'));
registerServiceWorker();
