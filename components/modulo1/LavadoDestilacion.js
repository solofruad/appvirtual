/**
 * Modules Dependencies
 */

import React from 'react';

export default class LavadoDestilacion extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){		
		return <div>
			<img src="public/img/modulo1/6.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />			
			<map id="testmap" name="testmap"> 
				<area shape="rect" coords="1000,120,1500,420" href="aula-de-clase.html" alt="Maquina 4" /> 
				<area shape="rect" coords="2343,120,2500,420" href="javascript:openAutoclaveDialog();" alt="Autoclave" /> 
				<area shape="rect" coords="2930,150,3000,310" href="javascript:openDestiladorDialog();" alt="Destilador" /> 		
				<area shape="rect" coords="3310,150,3450,380" href="javascript:openAguaDialog();" alt="Envase con Agua Destilada" /> 				
			</map>
		</div>	
	}
}