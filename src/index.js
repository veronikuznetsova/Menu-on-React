import './styles/default.scss';
import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux';
import { Provider } from 'react-redux';

const element = document.querySelector('#root');

ReactDom.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter> 
, element);