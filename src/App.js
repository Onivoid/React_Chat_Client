import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

import socket from './sockets/index.js';
 
class App extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
    this.socket = socket
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <React.Fragment>
              <Switch>
                <Route exact={true} path="/" render={ () => (<Home socket={socket} />) } />
                <Route path="/**" component={NotFound}/>
              </Switch>
            </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
