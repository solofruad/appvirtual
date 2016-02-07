/**
 * Modules Dependencies
 */

import React from 'react';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router';

export default class ModulosUnit extends React.Component {
	constructor(props){
		super(props);
		this.state = { isTouch: false};
	}
	onClick(ev){
		this.props.open.call(null,this.props.modulo)
	}
	recargar(){
		setTimeout(()=>{
			location.reload()
		},500);
	}
	componentWillMount(){
		if ("ontouchstart" in window || navigator.msMaxTouchPoints)
			 {
				 	this.setState({isTouch: true});
			 } else {
					 this.setState({isTouch: false});
			 }
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
			let titulo;
			if(this.state.isTouch){
				titulo = "";
			}
			else {
				titulo = "";
			}
			if(this.props.url=="javascript:void(0)"){
				if(this.props.modulo =="modulo3/2" || this.props.modulo =="modulo3/4" || this.props.modulo =="modulo3/5" || this.props.modulo =="modulo3/7"){
					return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
						<a href={this.props.url} className="mod" onClick={this.onClick.bind(this)}>
								<img src={urlImg} alt={this.props.titulo} className="img_contenido" />
								{ titulo  }
								<div className="info-image2">
									<div className="center-vertically">
										<p>{this.props.descripcion}</p>
										<h3>{this.props.titulo}</h3>
										<div></div>
									</div>
								</div>
						</a>
					</Col>
				}
				else{
					return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
						<a href={this.props.url} className="mod" onClick={this.onClick.bind(this)}>
								<img src={urlImg} alt={this.props.titulo} className="img_contenido" />
								{ titulo  }
								<div className="info-image">
									<div className="center-vertically">
										<p>{this.props.descripcion}</p>
										<h3>{this.props.titulo}</h3>
										<div></div>
									</div>
								</div>
						</a>
					</Col>
				}
			}
			else{ /*modulos index*/
				if(this.props.modulo == 1){
					return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
						<Link to={this.props.url} params={{ src: this.props.modulo }} className="mod" onClick={this.recargar}>
								<img src={urlImg} alt={this.props.titulo} className="img_contenido" />
								{ titulo  }
								<div className="info-image">
									<div className="center-vertically">
										<p>{this.props.descripcion}</p>
										<h3>{this.props.titulo}</h3>
										<div></div>
									</div>
								</div>
						</Link>
					</Col>
				}
				else{
					return <Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
						<Link to={this.props.url} params={{ src: this.props.modulo }} className="mod">
								<img src={urlImg} alt={this.props.titulo} className="img_contenido" />
								{ titulo  }
								<div className="info-image">
									<div className="center-vertically">
										<p>{this.props.descripcion}</p>
										<h3>{this.props.titulo}</h3>
										<div></div>
									</div>
								</div>
						</Link>
					</Col>
				}
			}
		}
	}
}
