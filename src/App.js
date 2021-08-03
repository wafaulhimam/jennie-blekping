import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Hooks from './pages/Hooks';
import Contributor from './pages/Contributor';
import Buku from './pages/Buku';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/about-me">
          <AboutMe />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/hooks">
          <Hooks />
        </Route>

        <Route path="/contributor">
          <Contributor />
        </Route>

        <Route path="/buku">
          <Buku />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
