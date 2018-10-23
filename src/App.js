import React, { Component } from 'react';
import './App.css';
import Background from './pages/splash-page/background/Background.js';
import HomePage from './pages/home-page/homePage';

class App extends Component {
  constructor(){
    super();
    this.state={page:"Splash"};
    this.handleClick=this.handleClick.bind(this);
    
  }
  handleClick() {
    this.setState({page:"Home"});
    console.log(this.state.page);
  }
  render() {
    let view = this.state.page;
    switch(view){
      case "Splash":
        return (
          <div className="App">
            <Background  changePage={this.handleClick.bind(this)}/>
          </div>
        );
      case "Home":
          return(
            <div className="App">
            <HomePage/>
            </div>
          );
      case "About":

    }
}
}
export default App;
