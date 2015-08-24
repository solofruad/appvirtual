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
				<img src="public/img/icon-location.png" className="contacto-ubicacion-imagen" />
				<div className="contacto-ubicacion-contenido">
					<strong>Universidad de los Llanos</strong> 
					<p>Km 12. Via Puerto López</p>
				</div>
			</div>
			<br />
			<div className="contacto-telefono">
				<img src="public/img/icon-phone.png" className="contacto-telefono-imagen" />
				<div className="contacto-telefono-contenido">
					<strong>Telefono</strong>
					<p>PBX. 6616800</p>
				</div>
			</div>
		</div>
	}
}