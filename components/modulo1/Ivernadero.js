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
				<area shape="rect" coords="875,80,1150,420" href="javascript:openIvernaderoDialog();" alt="Invernadero" /> 
				<area shape="rect" coords="2810,120,3230,420" href='javascript:document.location.replace("/#/modulo1/5");document.location.reload();' alt="Aula de clase" /> 						
			</map>
		</div>	
	}
}