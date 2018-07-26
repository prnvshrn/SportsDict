import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import HomePanel from './components/homepanel.js';
import FootballPanel from './components/football_panel.js';

class App extends Component {
   constructor(props){
    super(props);
    this.state = {
      current_tab: 'Home'
    };
    this.handler = this.handler.bind(this);
  }

  handler(e){
      this.setState({
      current_tab: e.target.id
    })
  } 	

  render() {
  	let show_panel;

  	switch(this.state.current_tab){
  		case 'Home':
  		show_panel = <HomePanel/>;
  		break;

  		case 'Football':
  		show_panel = <FootballPanel/>;
  		break;
  	}

    return (
      <div className="App">
        <Header handler={this.handler}/>
        {show_panel}
      </div>
    );
  }
}

export default App;
