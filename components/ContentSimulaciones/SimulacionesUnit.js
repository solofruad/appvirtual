/**
 * Modules Dependencies
 */

import React from 'react';
import {Col} from 'react-bootstrap';


export default class SimulacionesUnit extends React.Component {
	constructor(props){
		super(props);
	}
	onClick(ev){
		this.props.open.call(null,this.props.simulacion)
	}
	render(){
		var css = `img-modulo box-mod bm${this.props.id} box-contacto3`;
		let result;
		if (this.props.avatar == 'n'){
			result = <Col xs={6} sm={6} md={3} lg={3} className={css}>
				<a href={this.props.url} className="mod-simulaciones" onClick={this.onClick.bind(this)}>
					 <div className="box-contacto-container">
						<small className="box-contacto-header">Simulacion</small><br />
						<div className="box-line">____________________</div>
						<p>{this.props.nombre}</p>
						<small></small>
					</div>	
				</a>
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
