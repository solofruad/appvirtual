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
		          	<li eventKey={2.1} className="reloadModulo"><Link to={`/modulo1/${1}`} onClick={this.recargar}><b>Modulo 1. </b>Conociendo el laboratorio</Link></li>
						<li eventKey={2.2}><Link to={`modulo/${2}`}><b>Modulo 2. </b>Preparación de Stocks</Link></li>
						<li eventKey={2.3}><Link to={`modulo/${3}`}><b>Modulo 3. </b>Preparación de Medios de Cultivo</Link></li>
				  		<li eventKey={2.4}><Link to={`modulo/${4}`}><b>Modulo 4. </b>Micropropagación in vitro</Link></li>
				  		<li eventKey={2.5}><Link to={`modulo/${5}`}><b>Modulo 5. </b>Etapa ex vitro</Link></li>
				  		<li eventKey={2.6}><Link to={`modulo/${6}`}><b>Modulo 6. </b>Cultivo in vitro de meristemos y ápices</Link></li>
				  		<li eventKey={2.7}><Link to={`modulo/${7}`}><b>Modulo 7. </b>Rescate y cultivo de embriones cigótico</Link></li>
			          <MenuItem divider />
								<li eventKey={2.8}><Link to={`/simulaciones`}>Simulaciones</Link></li>								
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
