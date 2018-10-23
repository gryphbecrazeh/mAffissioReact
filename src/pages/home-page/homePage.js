import React, { Component } from 'react';
import './homePage.css';
// this is a test, and proves that I can create buttons as a component, pull them into this component, and give them contectual properties with the names, and link targets for the buttons, this is so cool!
// import Background from '../splash-page/background/Background'
import Header from './header/header';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';
import Button from '../Components/Button/Button';
class HomePage extends Component {
//   constructor(props){
//     super(props);
//     this.state={page:"Home"};

//   };
  render() {
    return(
        <div className="homePage">
        <Header/>
        <Navbar/>
        <Button/>
        <p>Content</p>
        <Footer/>
        </div>
    );
    }
  }


export default HomePage;
