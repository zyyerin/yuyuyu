import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export { default as Header } from './components/Header/Header';
export { default as Footer } from './components/Templates/Footer/Footer';
export { default as Banner } from './components/Banner/Banner';
export { default as Cards } from './components/Cards/Cards';
export { default as Card } from './components/Card/Card';
export { default as hicool2020 } from './pages/projects/hicool2020';
export { default as Home } from './pages/Home';
export { default as IntroBanner } from './components/Templates/IntroBanner';
export { default as Milvus } from './pages/projects/Milvus';
export { default as Slush } from './pages/projects/Slush';
export { default as SlushTemplate } from './components/Templates/SlushTemplate';
export { default as baokujiangxin } from './pages/projects/baokujiangxin';
ReactDOM.render(<App />, document.getElementById('root'))