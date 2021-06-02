import React from 'react'
import { hicool2020, Home, Milvus, Slush } from './index.js';
import { HashRouter as Router,  Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

function App() {
  const browserHistory = createBrowserHistory();
  return (
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project/hicool2020" component={hicool2020} />
          <Route path="/project/Milvus" component={Milvus} />
          <Route path="/project/Slush" component={Slush} />
        </Switch>
      </Router>
  )
}

export default App;