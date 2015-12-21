/**
 * Modules Dependencies
 */

import React from 'react';
import {Link} from 'react-router';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {CollapsibleNav} from 'react-bootstrap'
import {OverlayTrigger} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';

import Contacto from './Contacto';


export default class Menu extends React.Component {
	constructor(props){
		super(props);
	}
	recargar(){
		setTimeout(()=>{
    	location.reload()
    },500);
	}
	render(){
		return (<div>
			<Navbar fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to={`/`}>CTVirtual</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
		    <Navbar.Collapse eventKey={0}> {/* This is the eventKey referenced */}
		      <Nav>
		        <li eventKey={1}><Link to={`/`} ><i className="fa fa-home"></i>&nbsp; Inicio</Link></li>
		        <NavDropdown eventKey={2} title='Modulos' id="basic-nav-dropdown">
		          	<li eventKey={2.1} className="reloadModulo"><Link to={`/modulo1/${1}`} onClick={this.recargar}>Modulo 1</Link></li>
			          <li eventKey={2.2}><Link to={`modulo/${2}`}>Modulo 2</Link></li>
			          <li eventKey={2.3}><Link to={`modulo/${3}`}>Modulo 3</Link></li>
					  		<li eventKey={2.4}><Link to={`modulo/${4}`}>Modulo 4</Link></li>
					  		<li eventKey={2.5}><Link to={`modulo/${5}`}>Modulo 5</Link></li>
			          <MenuItem divider />
								<li eventKey={2.6}><Link to={`/creditos`}>Simulación 1</Link></li>
								<li eventKey={2.7}><Link to={`/creditos`}>Simulación 2</Link></li>
			        </NavDropdown>
			      </Nav>
			      <Nav pullRight>
			        <li eventKey={1}><Link to={`/creditos`}><i className="fa fa-users"></i>&nbsp;Créditos</Link></li>
			        <OverlayTrigger trigger='click' rootClose placement='bottom'
			        	overlay={
			        		<Popover bsSize='large' id="pop1" key="pop1">
			        			<Contacto />
			        		</Popover>
			        	}
			        >
			        	<NavItem eventKey={2}><i className="fa fa-location-arrow"></i>&nbsp; Contacto</NavItem>
			        </OverlayTrigger>
			      </Nav>
			    </Navbar.Collapse>
	  		</Navbar>
	  		{this.props.children}
	  	</div>
		)
	}
}
