/**
 * Modules Dependencies
 */

import React from 'react';


export default class Header extends React.Component {
	constructor(props){
		super(props);
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
							<a href="#modulo">
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
