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
    		<div className="PrincipalHeader-top">
	    		<div className="PrincipalHeader-top-tittle">
		    		<span>Laboratorio Virtual</span>
		    		<h1>Cultivo de Tejidos Vegetales</h1>
	    		</div>
    			<div className="slogan"><br /><br />
    				<lead>En el laboratorio se desarrollan procedimientos de cultivo in vitro. Conocerás los procedimientos para la preparación de medios de cultivo y los pasos para el resultado final de la plata.</lead>
    			</div>
    		</div>
    		<br />
    		<a href="#modulo" className="btn btn-lg btn-default nav-scroll">Comenzar</a>
    	</div>
	}
}