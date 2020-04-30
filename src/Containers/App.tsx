import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import MainScreen from './MainScreen';

const History = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainScreen}/>
      <Route path='/history' component={History}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/history'>History</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
)

export default App;
  