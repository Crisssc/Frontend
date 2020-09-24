import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
