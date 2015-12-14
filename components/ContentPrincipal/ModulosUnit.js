/**
 * Modules Dependencies
 */

import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router';

export default class ModulosUnit extends React.Component {
	constructor(props){
		super(props);
	}
	onClick(ev){
		this.props.open.call(null,this.props.modulo)
	}
	render(){
		var urlImg = `public/img/${this.props.modulo}.png`;
		if(this.props.titulo==""){
			return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href={this.props.url} className="mod" onClick={this.onClick.bind(this)}>
						<img src={urlImg} alt={this.props.titulo} className="img_contenido" />
					</a>
			</Col>
		}
		else{
			if(this.props.url=="javascript:void(0)"){
				return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href={this.props.url} className="mod" onClick={this.onClick.bind(this)}>
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
			else{
				return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<Link to={this.props.url} params={{ src: this.props.modulo }} className="mod">					
							<img src={urlImg} alt={this.props.titulo} className="img_contenido" />
							<div className="info-image">
								<div className="center-vertically">
									<h3>{this.props.titulo}</h3>
									<p>{this.props.descripcion}</p>
								</div>
							</div>
					</Link>
				</Col>
			}
		}
	}
}
