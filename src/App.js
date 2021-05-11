import React from 'react'
import { HICOOL, Home } from './index.js';
import { BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
      <Router >
        <div> 
          <Route exact path="/" component={Home} />
          <Route path="/project/HICOOL" component={HICOOL} />
        </div>
      </Router>
       
  )
}

export default App;