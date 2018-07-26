import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron, Carousel} from 'react-bootstrap';

class HomePanel extends Component{
	render(){
		return(
			<div>
			<Jumbotron>
			  <h1>Hello welcome to Sports Compare</h1>
			</Jumbotron>
			<Carousel>
			  <Carousel.Item>
			    <img width={900} height={500} alt="900x500" src="/carousel.png" />
			    <Carousel.Caption>
			      <h3>First slide label</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img width={900} height={500} alt="900x500" src="/carousel.png" />
			    <Carousel.Caption>
			      <h3>Second slide label</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img width={900} height={500} alt="900x500" src="/carousel.png" />
			    <Carousel.Caption>
			      <h3>Third slide label</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			</div>
		);
	}
}

export default HomePanel;