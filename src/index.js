import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import HeartYourHealth from '../src/app/HeartYourHealth';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HeartYourHealth />, document.getElementById('root'));
registerServiceWorker();
