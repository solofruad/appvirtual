/**
 * Modules Dependencies
 */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

export default class Modulo1 extends React.Component {
	constructor(props){
		super(props);
	}
	onClick(ev){
		this.props.open.call(null,'crecimiento')
	}
	render(){
		return <div>
			<img src="public/img/modulo1/1.jpg" ref="advancedpanorama" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />
			<map id="testmap" name="testmap">
				<area shape="rect" coords="2990,80,3180,380" href="/#/modulo1/2" id="relo" alt="Sala de Microbiologia"></area>
				<area shape="rect" coords="2470,80,2660,380" id="area-sala-siembra" href="javascript:openFirstDialog();" alt="Sala de Siembra"  />
				<area shape="rect" coords="1875,114,2065,380" href="javascript:openSecondDialog();" alt="Sala de Crecimiento" />
				<area shape="rect" coords="1355,80,1480,380" href='/#/modulo1/5' alt="Aula de clase" />
				<area shape="rect" coords="1050,80,1190,380" href='/#/modulo1/4' alt="Sala de Preparación de Medios" />
				<area shape="rect" coords="380,80,880,380" href='/#/modulo1/3' alt="Sala de Vidreria y Reactivos"/>
			</map>
		</div>
	}
}
