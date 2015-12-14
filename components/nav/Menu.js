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
			        <NavItemLink to="Inicio" params={{ src: 'hello' }}><i className="fa fa-home"></i>&nbsp; Inicio</NavItemLink>
			        <DropdownButton title='Modulos'>
			          <MenuItemLink to="Modulo1" params={{ src: 1 }} className="reloadModulo">Modulo 1</MenuItemLink>
			          <MenuItemLink to="IntoMod2" params={{ src: 2 }}>Modulo 2</MenuItemLink>
			          <MenuItemLink to="IntoMod2" params={{ src: 3 }}>Modulo 3</MenuItemLink>
					  <MenuItemLink to="Modulo4" params={{ src: 'hello' }}>Modulo 4</MenuItemLink>
					  <MenuItemLink to="Modulo5" params={{ src: 'hello' }}>Modulo 5</MenuItemLink>
			          <MenuItem divider />
			          <MenuItemLink to="Creditos" params={{ src: 'hello' }}>Simulación 1</MenuItemLink>
			          <MenuItemLink to="Creditos" params={{ src: 'hello' }}>Simulación 2</MenuItemLink>
			        </DropdownButton>
			      </Nav>
			      <Nav navbar right>
			        <NavItemLink to="Creditos" params={{ src: 'hello' }}><i className="fa fa-users"></i>&nbsp;Créditos</NavItemLink>
			        <OverlayTrigger trigger='click' rootClose placement='bottom'
			        	overlay={
			        		<Popover bsSize='large'>
			        			<Contacto />
			        		</Popover>
			        	}
			        >
			        	<NavItem to="Modulo2" params={{ src: 'hello' }}><i className="fa fa-location-arrow"></i>&nbsp; Contacto</NavItem>
			        </OverlayTrigger>
			      </Nav>
			    </CollapsibleNav>
	  		</Navbar>
	  		<RouteHandler />
	  	</div>
	}
}
