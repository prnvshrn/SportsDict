import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import {Query, ApolloProvider} from 'react-apollo';

const name = 'Gary Cahill';

const client = new ApolloClient({
  		uri: "graphql"
	});

const football_query = gql`
	      query football($breed: String!){
		  football(name:$breed) {
		    name,
		    position,
		    goals,
		    chances_created,
		    defensive_actions
		  }
		}`;

const Pest = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
		<ExchangeRates/>
    </div>
  </ApolloProvider>
);

class Numpy extends Component{
constructor(props, context) {
    super(props, context);
}
	render(){
		//alert(this.props.name);
		return(
			<div>
			<ApolloProvider client={client}>
		    <div>
		      <h2>My first Apollo app</h2>
			  <Query
    query={football_query} variables={{breed: this.props.name}}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.football.map(({ name, position }) => (
        <div key={name}>
          <p>{name}{position}</p>
        </div>
      ));
    }}
  </Query>	
		    </div>
		  	</ApolloProvider>
			</div>
		);
	}
}

const ExchangeRates = () => (
  <Query
    query={football_query} variables={{breed: 'Gary Cahill'}}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.football.map(({ name, position }) => (
        <div key={name}>
          <p>{name}{position}</p>
        </div>
      ));
    }}
  </Query>
);

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
	    query: football_query,
	  })
	  .then(console.log);
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
			<Pest/>
			<Numpy name={this.state.value}/>
			</div>
		);
	}
}

export default MainPanel;