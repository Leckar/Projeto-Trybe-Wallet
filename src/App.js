import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
