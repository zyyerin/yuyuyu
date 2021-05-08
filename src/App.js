import React from 'react'
import { Header, Banner, Cards, Footer } from './index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Banner">
        <Banner />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;