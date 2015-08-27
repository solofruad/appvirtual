/**
 * Modules Dependencies
 */

import React from 'react';

export default class Modulo1 extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){		
		return <div>
			<img src="public/img/modulo1/1.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />
			<map id="testmap" name="testmap"> 
				<area shape="rect" coords="3150,80,3330,380" href="" alt="Sala de Microbiologia" /> 
				<area shape="rect" coords="2590,80,2780,380" href="" alt="Sala de Siembra"  /> 
				<area shape="rect" coords="1980,114,2170,380" href="" alt="Sala de Crecimiento" /> 
				<area shape="rect" coords="1420,80,1550,380" href="" alt="Aula de clase" /> 
				<area shape="rect" coords="1110,80,1240,380" href="" alt="Sala de Preparación de Medios" /> 
				<area shape="rect" coords="380,80,840,380" href="" alt="Sala de Vidreria y Reactivos"/> 
			</map>
		</div>	
	}
}
