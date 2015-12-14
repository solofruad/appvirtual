/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import ModulosUnit from './ModulosUnit';

export default class Modulos extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <Grid>		
			<Row className="contentPrincipal">
				{
				this.props.modulos.map((content) => {									
					return <ModulosUnit  
						key={content.modulo}
						modulo={content.modulo} 
						titulo={content.titulo}
						descripcion={content.descripcion}
						url={content.url} 						
						open={this.props.open}/>						
				})	
				}	
			</Row>							
		</Grid>
	}
}