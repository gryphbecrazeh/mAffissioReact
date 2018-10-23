import React, { Component } from 'react';
import './Card.css';
import './cardAnim.css';

class Card extends Component { 
  constructor(props){
    super(props);
    this.state={page:"Home"};

  };
  changePagePlease(){
    this.props.buttonClicked(this.state.page);
  }
  render() {
  return (
  <div className="cardHolder">
    <div className="cardBorder">
      <div className="card">
        <h1>M. Affissio Associates </ h1>
        <hr />
        <address>1(xxx)xxx-xxx | POBOX xxx</address>
        <button id='enterButton' onClick={this.changePagePlease.bind(this)}>Click to enter</button>
      </div>
    </div>
  </div>      
  );
  }
}

export default Card;
