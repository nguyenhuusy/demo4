import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Home from './pages/Home';
import ColorfulTiles from './pages/ColorfulTiles';
import Giphy from './pages/Giphy';
import GiphyDetail from './pages/GiphyDetail';
import NotFound from './pages/NotFound';
import History from './pages/History/History';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="app">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/colorful-tiles" component={ ColorfulTiles }/>
              <Route path="/giphy" component={ Giphy }/>
              <Route path="/giphy-detail/:id" component={ GiphyDetail }/>
              <Route path="/history" component={History}/>
              <Route component={ NotFound }/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
