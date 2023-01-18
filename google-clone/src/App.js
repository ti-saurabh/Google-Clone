import React from 'react';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 

// import Switch from "react-switch";
import './App.css'
import Home from "./components/Home"
import Search from "./components/Search"
import Navbar from './components/Navbar';
import GlobalStyle from './styles/globalStyles';
import About from './pages/About';
import Store from './pages/Store';
import Gmail from './pages/Gmail';
import Images from './pages/Images';


function App() {
  return (
    <Router>
    <GlobalStyle />
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path='/about' component={About} />
        <Route path='/store' component={Store} />
        <Route path='/gmail' component={Gmail} />
        <Route path='/images' component={Images} />
       
      </Switch>
    </Router>
  )
}

export default App;
