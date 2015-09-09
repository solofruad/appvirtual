/**
 * Modules Dependencies
 */

import React from 'react';

export default class AulaClase extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){		
		return <div>
			<img src="public/img/modulo1/5.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />			
			<map id="testmap" name="testmap"> 
				<area shape="rect" coords="2343,72,2440,380" href="lavado-y-destilacion.html" alt="Area de Lavado y destilacion" /> 
				<area shape="rect" coords="2730,72,2830,380" href="index.html" alt="Corredor" /> 
				<area shape="rect" coords="2000,72,2100,380" href="ivernadero.html" alt="Ivernadero" /> 					
			</map>
		</div>	
	}
}