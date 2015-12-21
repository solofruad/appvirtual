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
				<area shape="rect" coords="2830,130,3010,480" href='/#/modulo1/7' alt="Ivernadero" />
				<area shape="rect" coords="3300,130,3560,480" href='/#/modulo1/6' alt="Area de Lavado y destilacion" />
				<area shape="rect" coords="3890,130,4030,480" href='/#/modulo1/1' alt="Corredor" /> 
			</map>
		</div>
	}
}
