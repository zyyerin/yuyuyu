import React from 'react'
import { hicool2020, Home, Milvus, Slush, baokujiangxin } from './index.js';
import { HashRouter as Router,  Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

function App() {
  const browserHistory = createBrowserHistory();
  return (
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/hicool2020" component={hicool2020} />
          <Route path="/projects/Milvus" component={Milvus} />
          <Route path="/projects/Slush" component={Slush} />
          <Route path="/projects/baokujiangxin" component={baokujiangxin} />
        </Switch>
      </Router>
  )
}

export default App;