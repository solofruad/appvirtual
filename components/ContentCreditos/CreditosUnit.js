/**
 * Modules Dependencies
 */

import React from 'react';
import {Col} from 'react-bootstrap';


export default class CreditosUnit extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var css = `img-modulo box-mod bm${this.props.id} box-contacto3`;
		let result;
		if (this.props.avatar == 'n'){
			result = <Col xs={6} sm={6} md={3} lg={3} className={css}>
				 <div className="box-contacto-container">
					<small className="box-contacto-header">{this.props.rol}</small><br />
					<div className="box-line">____________________</div>
					<p>{this.props.nombre}</p>
					<small>{this.props.informacion}</small>
				</div>
			</Col>
		}
		else{
			result = <Col xs={6} sm={6} md={3} lg={3} className={css}>
			 	<img src={this.props.avatar} className="img-modulo" />
			</Col>
		}
		return result;
	}
}
