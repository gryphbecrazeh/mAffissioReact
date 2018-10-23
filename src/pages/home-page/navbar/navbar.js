import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
//   constructor(props){
//     super(props);
//     this.state={page:"Home"};

//   };
  render() {
    return(
        <div className="navBar">
        <ul>
            <li>
                Home
            </li>
            <li>
                Services
            </li>
            <li>
                About Us
            </li>
            <li>
                Contact
            </li>

        </ul>
        </div>
    );
    }
  }


export default Navbar;
