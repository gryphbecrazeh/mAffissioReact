import React, { Component } from 'react';
import './Background.css';
import Card from '../card/Card';
class Background extends Component {
  constructor(props){
    super(props);
    this.state={page:"Home"};

  };
  onChangePage(){
    this.props.changePage(this.state.page);
  }
  render() {
    return(
      <div className="splash">
        <Card buttonClicked={this.onChangePage.bind(this)}/>
      </div>
    );
    }
  }


export default Background;
