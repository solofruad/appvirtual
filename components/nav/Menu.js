/**
 * Modules Dependencies
 */

import React from 'react';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {CollapsibleNav} from 'react-bootstrap'

export default class Menu extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <Navbar fixedTop brand='CTVirtual' toggleNavKey={0}>
		    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
		      <Nav navbar>
		        <NavItem eventKey={1} href='#'>Inicio</NavItem>		        
		        <DropdownButton eventKey={3} title='Modulos'>
		          <MenuItem eventKey='1'>Modulo 1</MenuItem>
		          <MenuItem eventKey='2'>Modulo 2</MenuItem>
		          <MenuItem eventKey='3'>Modulo 3</MenuItem>
		          <MenuItem divider />
		          <MenuItem eventKey='4'>Simulación 1</MenuItem>
		          <MenuItem eventKey='4'>Simulación 2</MenuItem>
		        </DropdownButton>
		      </Nav>
		      <Nav navbar right>
		        <NavItem eventKey={1} href='#'>Créditos</NavItem>
		        <NavItem eventKey={2} href='#'>Contacto</NavItem>
		      </Nav>
		    </CollapsibleNav>
  		</Navbar>	
	}
}