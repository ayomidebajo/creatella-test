import React, { Component } from "react";
import "./styles/layout.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
        <Switch>
          
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
