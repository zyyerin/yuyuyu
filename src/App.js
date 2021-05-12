import React from 'react'
import { HICOOL, Home, Milvus, Slush } from './index.js';
import { BrowserRouter as Router,  Route} from 'react-router-dom';

function App() {
  return (
      <Router >
          <Route exact path="/" component={Home} />
          <Route path="/project/HICOOL" component={HICOOL} />
          <Route path="/project/Milvus" component={Milvus} />
          <Route path="/project/Slush" component={Slush} />
      </Router>
       
  )
}

export default App;