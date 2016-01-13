/**
 * Modules Dependencies
 */

import React from 'react';

export default class Microbiologia extends React.Component {
	constructor(props){
		super(props);			
	}	
	render(){		
		return <div>
			<img src="public/img/modulo1/sculpteur.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />			
			<map id="testmap" name="testmap"> 
				<area shape="rect" coords="3343,72,3520,380" href='/#/modulo1/1' alt="vers la salle de formation" /> 
				<area shape="rect" coords="783,270,895,370" href="javascript:openAgitadoraDialog();" alt="Plancha calentadora-agitadora" /> 
				<area shape="rect" coords="2155,270,2290,370" href="javascript:openMicropipetasDialog();" alt="Micropipetas"/> 
			</map>
		</div>	
	}
}
