/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import CreditosUnit from './CreditosUnit';
import uid from 'uid';

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
							key={uid(10)}
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