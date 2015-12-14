/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import CreditosUnit from './CreditosUnit';

export default class Creditos extends React.Component {
	constructor(props){
		super(props);		
	}
	render(){
		return <Grid>
			<Row className="contentPrincipal">
				{
					this.props.creditos.map((content) => {
						return <CreditosUnit 
							id={content.id}
							rol={content.rol}
							nombre={content.nombre}
							informacion={content.informacion}
							avatar={content.avatar} />
					})
				}
			</Row>
		</Grid>	
	}
}