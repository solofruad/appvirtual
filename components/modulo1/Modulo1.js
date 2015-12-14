/**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

export default class Modulo1 extends React.Component {
	constructor(props){
		super(props);	
	}
				
	render(){	
		
		return <div>			
			<img src="public/img/modulo1/1.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />
			<map id="testmap" name="testmap"> 
				<area shape="rect" coords="2990,80,3180,380" href='javascript:document.location.replace("/#/modulo1/2");document.location.reload();' id="relo" alt="Sala de Microbiologia"></area>
				<area shape="rect" coords="2470,80,2660,380" id="area-sala-siembra" href="javascript:openFirstDialog();" alt="Sala de Siembra"  /> 
				<area shape="rect" coords="1875,114,2065,380" href="javascript:openSecondDialog();" alt="Sala de Crecimiento" />
				<area shape="rect" coords="1355,80,1480,380" href='javascript:document.location.replace("/#/modulo1/5");document.location.reload();' alt="Aula de clase" /> 
				<area shape="rect" coords="1050,80,1190,380" href='javascript:document.location.replace("/#/modulo1/4");document.location.reload();' alt="Sala de Preparación de Medios" /> 
				<area shape="rect" coords="380,80,880,380" href='javascript:document.location.replace("/#/modulo1/3");document.location.reload();' alt="Sala de Vidreria y Reactivos"/> 
			</map>			
		</div>	
	}
}