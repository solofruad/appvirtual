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
				<area shape="rect" coords="1400,120,2200,420" href='javascript:document.location.replace("/#/modulo1/5");document.location.reload();' alt="Aula de clase" /> 
				<area shape="rect" coords="3323,140,3570,490" href="javascript:openAutoclaveDialog();" alt="Autoclave" /> 
				<area shape="rect" coords="4200,245,4280,380" href="javascript:openDestiladorDialog();" alt="Destilador" /> 		
				<area shape="rect" coords="4780,250,4890,430" href="javascript:openAguaDialog();" alt="Envase con Agua Destilada" /> 				
			</map>
		</div>	
	}
}