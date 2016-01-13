/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalBalanza extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="balanza-popup" className="avgrund-popup avg-width-55">
	   		<div className="row">
			   	<div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>BALANZA ANALÍTICA</span></h2>
					<img src="public/img/modulo1/maquina_10.jpg" className="img-modal-show" />
				</div>
				<div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 cont-modal-show">
		        	<p className="txt-parrafo">Algunos de los reactivos que se van a pesar, en el caso de los micronutrientes, son menores a 10-4; por tanto, se necesita un equipo de precisión como la balanza analítica. Para el funcionamiento de la balanza analítica se prende el equipo, se coloca el papel o material que va evitar el contacto directo con el platillo de pesaje y se tarar (dejar en cero para no sumar el peso del material que se pone). Luego se abre un lado y se aplica la sustancia hasta cuando llegue al peso necesario y se cierra para determinar si es la medida correcta.</p>
		    	</div>
			</div>
	        <a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
    	</aside>
	}
}
