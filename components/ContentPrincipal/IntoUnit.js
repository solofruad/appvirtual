/**
 * Modules Dependencies
 */

import React from 'react';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router';

export default class IntoUnit extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var urlImg = `public/img/modulo${this.props.modulo}/Into${this.props.id}.png`;
		if(this.props.titulo==""){
			return <Col xs={12} sm={12} md={6} lg={6} className="col-into">
						<img src={urlImg} className="img_into" />
			</Col>
		}
		else{
				return <Col xs={12} sm={12} md={6} lg={6} className="col-into">
						<div className="content-into">
							<h1>{this.props.titulo}</h1>
							<p>{this.props.descripcion}</p>
							<Link to={`/${this.props.url}`} className="link-into">
									<p>Comenzar a explorar</p>
									<div></div>
							</Link>
						</div>
				</Col>
		}
	}
}
