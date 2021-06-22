import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Homepage/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/portofolio' exact component={Portofolio}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
