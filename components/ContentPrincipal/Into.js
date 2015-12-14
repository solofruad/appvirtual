/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import IntoUnit from './IntoUnit';

export default class Into extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <Grid>
			<Row className="contentPrincipal">
				{
				this.props.componente.map((content) => {
					return <IntoUnit
						key={content.id}
            id={content.id}
						modulo={content.modulo}
						titulo={content.titulo}
						descripcion={content.descripcion}
						url={content.url}/>
				})
				}
			</Row>
		</Grid>
	}
}
