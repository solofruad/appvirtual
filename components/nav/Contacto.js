/**
 * Modules Dependencies
 */

import React from 'react';


export default class Menu extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div className="contacto">
			<h5><strong>Grupo de Investigación de Horizonte Mediatico</strong></h5>
			<br /><br />
			<div className="contacto-ubicacion">			
				<h1 className="contacto-ubicacion-imagen"><i className="fa fa-map-marker"></i></h1>
				<div className="contacto-ubicacion-contenido">					
					<strong>Universidad de los Llanos</strong> 
					<p>Km 12. Via Puerto López</p>
				</div>
			</div>
			<br />
			<div className="contacto-telefono">
				<h1 className="contacto-telefono-imagen"><i className="fa fa-phone-square"></i></h1>
				<div className="contacto-telefono-contenido">
					<strong>Telefono</strong>
					<p>PBX. 6616800</p>
				</div>
			</div>
		</div>
	}
}