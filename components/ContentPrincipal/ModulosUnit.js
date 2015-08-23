/**
 * Modules Dependencies
 */

import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


export default class ModulosUnit extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var urlImg = `public/img/${this.props.modulo}.png`;
		return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href={this.props.url} className="mod">
						<img src={urlImg} alt={this.props.titulo} className="img_contenido" />
						<div className="info-image">
							<div className="center-vertically">
								<h3>{this.props.titulo}</h3>
								<p>{this.props.descripcion}</p>
							</div>
						</div>				
					</a>
			</Col>			
	}
}
