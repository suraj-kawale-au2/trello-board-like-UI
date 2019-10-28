import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import App from './App';



ReactDOM.render(<Provider store={configureStore()}>
                 <App />
                </Provider>, document.getElementById('root'));

