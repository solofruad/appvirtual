/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import SimulacionesUnit from './SimulacionesUnit';

export default class Simulaciones extends React.Component {
	constructor(props){
		super(props);		
	}
	render(){
		return <Grid>
			<Row className="contentPrincipal">
				{
					this.props.simulaciones.map((content) => {
						return <SimulacionesUnit 
							id={content.id}							
							nombre={content.nombre}
							url={content.url}							
							avatar={content.avatar}
							simulacion={content.simulacion}
							open={this.props.open} />
					})
				}
			</Row>
		</Grid>	
	}
}