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
			this.props.contenido.map((content) => {
				if(content.id==1){
					return <div className="PrincipalHeader-top">
	    						<div className="PrincipalHeader-top-tittle">
		    						<span>Laboratorio Virtual</span>
		    						<h1>{content.titulo}</h1>
	    						</div>
	    						<div className="slogan"><br /><br />
    								<lead>{content.descripcion}</lead>
    							</div>
    							
    						</div>    		
				}
				else{
					<p>No se encontro nada</p>
				}
				
			}) 

    	}
    	<br /><a href="#modulo" className="btn btn-lg btn-default nav-scroll">Comenzar</a>	
    	</div>
	}
}