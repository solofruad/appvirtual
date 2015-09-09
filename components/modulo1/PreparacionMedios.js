/**
 * Modules Dependencies
 */

import React from 'react';

export default class PreparacionMedios extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){		
		return <div>
			<img src="public/img/modulo1/4.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />			
				<map id="testmap" name="testmap"> 
					<area shape="rect" coords="1600,195,1670,310" href="javascript:openAsasDialog();" alt="ESTERILIZADOR DE ASAS" /> 
					<area shape="rect" coords="1350,180,1420,310" href="javascript:openEstereoDialog();" alt="ESTÉREO MICROSCOPIO" /> 
					<area shape="rect" coords="260,120,350,420" href="index.html" alt="Sala 4" /> 							
				</map>
		</div>	
	}
}