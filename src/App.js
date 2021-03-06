import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Deatil from './pages/detail';
import Login from './pages/login';
import store from './store';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
            <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Deatil}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
      
    );
  }
}

export default App;
