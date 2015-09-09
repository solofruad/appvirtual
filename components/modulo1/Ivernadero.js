/**
 * Modules Dependencies
 */

import React from 'react';

export default class Ivernadero extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){		
		return <div>
			<img src="public/img/modulo1/7.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />			
			<map id="testmap" name="testmap"> 
				<area shape="rect" coords="600,120,800,420" href="javascript:openIvernaderoDialog();" alt="Invernadero" /> 
				<area shape="rect" coords="1960,120,2230,420" href="aula-de-clase.html" alt="Aula de clase" /> 						
			</map>
		</div>	
	}
}