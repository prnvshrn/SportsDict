import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  		uri: "graphql"
	});

class MainPanel extends Component{
	constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handlesubmit(event){
  	event.preventDefault();
  	console.log(this.state.value);

	client
	  .query({
	    query: gql`
	      {
		  football(name:"Gary Cahill") {
		    name,
		    position,
		    goals,
		    chances_created,
		    defensive_actions
		  }
		}
	    `
	  })
	  .then(result => console.log(result));  	
  }

	render(){
		return(
			<div>
			<form onSubmit={this.handlesubmit}>
			<FormGroup>
				<FormControl
		            type="text"
		            value={this.state.value}
		            placeholder="Enter text"
		            onChange={this.handleChange}/>
          		<FormControl.Feedback />
			</FormGroup>
			<Button type="submit" bsStyle="success">Go</Button>
			</form>
			</div>
		);
	}
}

export default MainPanel;