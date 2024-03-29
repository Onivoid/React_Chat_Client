import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Load from './components/Load';

import socket from './sockets/index.js';
 
class App extends Component {
  constructor(){
    super();
    this.state = {
      serverStatus: false
    }
  }

  componentDidMount(){
    this.socket = socket
    socket.on('ServerON', ()=>{
      setTimeout(() => {
        this.setState({
          serverStatus : true
        })
      },1000);
    });
  }

  render() {
    return this.state.serverStatus ? (
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
    ) : (
      <div className="App">
        <Load />
      </div>
    )
  }
}

export default App;
