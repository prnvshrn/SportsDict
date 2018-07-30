import React, {Component} from 'react';
import PieCharts from './pie_charts.js';
import {Row, Col, FormControl, FormGroup, Grid} from 'react-bootstrap';

class ShowStatPanel extends Component{
	render(){
		//console.log(this.props.player1_stats.length);
		if(this.props.player1_stats.length > 0)
		{
			console.log('1 : ' + this.props.player1_stats[0].name);
		}

		return(
			<div>
			<Grid>

			<Row>
			<Col xs={6} md={4}>
			{this.props.player1_stats[0].name}
			</Col>
			<Col xs={6} md={4}>
			NAME
			</Col>
			<Col xs={6} md={4}>
			{this.props.player2_stats[0].name}
			</Col>
			</Row>

			<Row>
			<Col xs={6} md={4}>
			{this.props.player1_stats[0].position}
			</Col>
			<Col xs={6} md={4}>
			POSITION
			</Col>
			<Col xs={6} md={4}>
			{this.props.player2_stats[0].position}
			</Col>
			</Row>

			<Row>
			<Col xs={6} md={4}>
			<PieCharts stat1={this.props.player1_stats[0].goals} stat2={this.props.player2_stats[0].goals}/>
			</Col>
			<Col xs={6} md={4}>
			<PieCharts stat1={this.props.player1_stats[0].chances_created} stat2={this.props.player2_stats[0].chances_created}/>
			</Col>
			<Col xs={6} md={4}>
			<PieCharts stat1={this.props.player1_stats[0].shot_accuracy} stat2={this.props.player2_stats[0].shot_accuracy}/>
			</Col>
			</Row>

			<Row>
			<Col xs={6} md={4}>
			<PieCharts stat1={this.props.player1_stats[0].pass_accuracy} stat2={this.props.player2_stats[0].pass_accuracy}/>
			</Col>
			<Col xs={6} md={4}>
			<PieCharts stat1={this.props.player1_stats[0].defensive_actions} stat2={this.props.player2_stats[0].defensive_actions}/>
			</Col>
			<Col xs={6} md={4}>
			<PieCharts stat1={this.props.player1_stats[0].duels_won} stat2={this.props.player2_stats[0].duels_won}/>
			</Col>
			</Row>

			</Grid>
	    	</div>

		);
	}
}

export default ShowStatPanel;