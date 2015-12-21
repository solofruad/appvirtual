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
					<area shape="rect" coords="1910,250,2040,390" href="javascript:openEstereoDialog();" alt="ESTÉREO MICROSCOPIO" />
					<area shape="rect" coords="2290,250,2400,390" href="javascript:openAsasDialog();" alt="ESTERILIZADOR DE ASAS" />
					<area shape="rect" coords="350,120,550,420" href='/#/modulo1/1' alt="Sala 4" /> 							
				</map>
		</div>
	}
}
