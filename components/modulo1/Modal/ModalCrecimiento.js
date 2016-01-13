/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalCrecimiento extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="modal-crecimiento" className="avgrund-popup">
        	<h2 className="modal-title avg-margin-bottom"><div className="avg-titulo-modal">CTVirtual</div></h2>
        	<div className="row">
        		<div className="col-md-9 col-lg-9 col-sm-7 col-xs-12 relative">
        			<span className='label label-success avg-alt-img'>CUARTO DE CRECIMIENTO</span>
        			<img className="img-modal-show relative" src="public/img/modulo1/9.jpg" alt="Sala de crecimiento"/>
    			</div>
				<p className="col-md-3 col-lg-3 col-sm-5 col-xs-12 justify">Esta sección es para el desarrollo y diferenciación de las plantas. Posee unos estantes pintados de color blanco con icopores para evitar el crecimiento de agentes patógenos, un timer o temporizador para controlar el fotoperiodo, unas bombillas que brinden la intensidad lumínica adecuada para el creciiento y aire acondicionado para controlar la temperatura.</p>
			</div>
	 		<a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
   		</aside>
	}
}
