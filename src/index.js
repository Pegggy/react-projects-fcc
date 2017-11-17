import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './md-preview/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Input />, document.getElementById('root'));
registerServiceWorker();
