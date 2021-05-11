import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export { default as Header } from './components/Header/Header';
export { default as Footer } from './components/Footer/Footer';
export { default as Banner } from './components/Banner/Banner';
export { default as Cards } from './components/Cards/Cards';
export { default as HICOOL } from './components/HICOOL/HICOOL';
export { default as Home } from './components/Home/Home';
export { default as IntroBanner } from './components/Templates/IntroBanner';
export { default as Exterior } from './components/HICOOL/Exterior';
export { default as Interior } from './components/HICOOL/Interior';
export { default as Stage } from './components/HICOOL/Stage';
export { default as Exhibition } from './components/HICOOL/Exhibition';
export { default as OnlinePromotionAssets } from './components/HICOOL/OnlinePromotionAssets';
export { default as Milvus } from './components/Milvus/Milvus';

ReactDOM.render(<App />, document.getElementById('root'))