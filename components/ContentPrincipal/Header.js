/**
 * Modules Dependencies
 */

import React from 'react';


export default class Header extends React.Component {
	constructor(props){
		super(props);
	}
	scrollTo(ev){
		this.props.scrollto.call(null)
	}
	render(){
		return <div className="PrincipalHeader">
		{
			this.props.headers.map((content) => {
				if(content.id==1){
					return <div className="PrincipalHeader-top">
						<div className="PrincipalHeader-top-tittle">
							<span>LABORATORIO VIRTUAL</span>
							<div></div>
							<h1>{content.titulo}</h1>
						</div>
						<br />
						<div className="circulo">
							<a id="modulos" href="javascript:void(0)" onClick={this.scrollTo.bind(this)}>
								<p>Comenzar</p>
							</a>
						</div>
						<div className="slogan">
							<lead>{content.descripcion}</lead>
						</div>
					</div>
				}
				else{
					<p>No se encontro nada</p>
				}
			})
  	}
  	</div>
	}
}
