/**
 * Modules Dependencies
 */

import React from 'react';
import { default as Router, Route } from 'react-router';
import { RouteHandler } from 'react-router';


import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {CollapsibleNav} from 'react-bootstrap'

import {NavItemLink} from 'react-router-bootstrap';
import {MenuItemLink} from 'react-router-bootstrap';

import {OverlayTrigger} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';

import Contacto from './Contacto';


export default class Menu extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div>
			<Navbar fixedTop brand='CTVirtual' toggleNavKey={0}>
			    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
			      <Nav navbar>
			        <NavItemLink to="Inicio" params={{ someparam: 'hello' }}>Inicio</NavItemLink>		        
			        <DropdownButton title='Modulos'>
			          <MenuItemLink to="Modulo1" params={{ someparam: 'hello' }} id="mod1">Modulo 1</MenuItemLink>
			          <MenuItemLink to="Modulo1" params={{ someparam: 'hello' }}>Modulo 2</MenuItemLink>
			          <MenuItemLink to="Creditos" params={{ someparam: 'hello' }}>Modulo 3</MenuItemLink>
			          <MenuItem divider />
			          <MenuItemLink to="Creditos" params={{ someparam: 'hello' }}>Simulación 1</MenuItemLink>
			          <MenuItemLink to="Creditos" params={{ someparam: 'hello' }}>Simulación 2</MenuItemLink>
			        </DropdownButton>
			      </Nav>
			      <Nav navbar right>
			        <NavItemLink to="Creditos" params={{ someparam: 'hello' }}>Créditos</NavItemLink>
			        <OverlayTrigger trigger='click' rootClose placement='bottom' 
			        	overlay={
			        		<Popover bsSize='large'>
			        			<Contacto />
			        		</Popover>
			        	}
			        >
			        	<NavItem to="Modulo2" params={{ someparam: 'hello' }}>Contacto</NavItem>
			        </OverlayTrigger>
			      </Nav>
			    </CollapsibleNav>		    
	  		</Navbar>	  	
	  		<RouteHandler />
	  	</div>	  	
	}
}