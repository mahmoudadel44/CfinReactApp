import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Footer from './pages/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
