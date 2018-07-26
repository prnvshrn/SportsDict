import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component{
	render(){
		return(
			<Navbar>
	        <Navbar.Header>
	        <Navbar.Brand>
	          <a href="#home">SportsCompare</a>
	        </Navbar.Brand>
	        <Navbar.Toggle />
	        </Navbar.Header>
	       <Navbar.Collapse>
	        <Nav>
	          <NavItem eventKey={1} href="#" id='Football' onClick={this.props.handler}>
	            Football
	          </NavItem>
	          <NavItem eventKey={2} href="#" id='Baseball' onClick={this.props.handler}>
	            Baseball
	          </NavItem>
	          <NavItem eventKey={3} href="#">
	            Basketball
	          </NavItem>
	          <NavItem eventKey={4} href="#">
	            American Football
	          </NavItem>
	        </Nav>
	      </Navbar.Collapse>
	      </Navbar>
		);
	}
}

export default Header;