/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalAutoclave extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="autoclave-popup" className="avgrund-popup avg-width-55">
			<div className="row">
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>AUTOCLAVE</span></h2>
					<img src="public/img/modulo1/maquina_4.jpg" className="img-modal-show" />
	    		</div>
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
					<p className="txt-parrafo">Este aparato también necesita una toma directa para el suministro de agua; sin embargo existen aparatos con aplicación manual.</p>
					<p className="txt-parrafo">Antes de encender la autoclave toca determinar los psi(20), la temperatura (121°C) y el tiempo (20 minutos). Se introduce el material, esperando que alumbre la hilera de bombillos que va de amarilla a verde y amarilla.</p>
					<p className="txt-parrafo">Luego oprime ON, dando por determinado el proceso al apagar (oprimir off), bajar la palanca de estirilización y sacar el material descontaminando (foto 5). Generalmente se esterilizan frascos contaminados con hongo, bacterias, entre otros fitopatógenos y, material de uso en cámara de flujo laminar como las aguas destiladas-estériles, cajas Petri, la herramienta, el papel kraf o medios de cultivo que se preparan para la siembra.</p>
				</div>
			</div>
	        <a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
	    </aside>   	
	}
}
