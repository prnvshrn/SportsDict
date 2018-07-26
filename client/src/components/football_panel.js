import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, FormControl, FormGroup} from 'react-bootstrap';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import {Query, ApolloProvider} from 'react-apollo';
import ShowStatPanel from './show_stats.js';

const client = new ApolloClient({
  		uri: "graphql"
	});

const football_query = gql`
	      query football($player: String!){
		  football(name:$player) {
		    name,
		    position,
		    goals,
		    chances_created,
		    defensive_actions
		  }
		}`;

class FootballPanel extends Component{
	constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state = {
      value: '',
      value2: '',
      player1_stats: []
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleChange2(e) {
    this.setState({ value2: e.target.value });
  }


	render(){
		console.log(this.state.player1_stats);

		return(
			<div>
			<Row>
			<form>
				<Col xs={8} md={5}>
				<FormGroup>
				 <FormControl
	            type="text"
	            placeholder="Enter text"
	            value={this.state.value}
		        onChange={this.handleChange}
	          	/>
	          	</FormGroup>
				</Col>
				<Col xs={2} md={2}>
				</Col>
				<Col xs={8} md={5}>
				<FormGroup>
				<FormControl
	            type="text"
	            placeholder="Enter text"
	            value={this.state.value2}
		        onChange={this.handleChange2}
	          	/>
	          	</FormGroup>
				</Col>
			</form>	
			</Row>

			<ApolloProvider client={client}>
		    <div>
			  <Query
			    query={football_query} variables={{player: this.state.value}}
			  >
			    {({ loading, error, data }) => {
			      if (loading) return <p>Loading...</p>;
			      if (data) { this.state.player1_stats = data.football; console.log(this.state.player1_stats);
			      return data.football.map(({ name, position, chances_created }) => (
			        <div key={name}>
			          <p>{name}{position}</p>
			        </div>
			      ));}
			    }}
			  </Query>	
		    </div>
		  	</ApolloProvider>

		  	<ApolloProvider client={client}>
		    <div>
			  <Query
			    query={football_query} variables={{player: this.state.value2}}
			  >
			    {({ loading, error, data }) => {
			      if (loading) return <p>Loading...</p>;

			      return data.football.map(({ name, position, chances_created }) => (
			        <div key={name}>
			          <p>{name}{position}</p>
			          <ShowStatPanel/>
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

export default FootballPanel;