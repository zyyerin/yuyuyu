import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export { default as Header } from './components/Header/Header';
export { default as Footer } from './components/Footer/Footer';
export { default as Banner } from './components/Banner/Banner';
export { default as Cards } from './components/Cards/Cards';

ReactDOM.render(<App />, document.getElementById('root'))