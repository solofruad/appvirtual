/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalMicropipetas extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="micropipetas-popup" className="avgrund-popup">
	   		<div className="row">
				<div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>MICROPIPETAS</span></h2>
					<img src="public/img/modulo1/maquina_6.jpg"  className="img-modal-show" />
				</div>
				<div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 cont-modal-show">
					<p className="txt-parrafo">Se usa para hervir el agua y agitarla. Es el caso del stock de micronutrientes #5 al baño maría o en la dilución al Phytagel con agua hirviendo y su posterior agitación para que la sustancia se homogenice.</p>
					<p className="txt-parrafo">Para el funcionamiento de la plancha se coloca un aluminio y se enciende; si se necesita que mande el pulso electro magnético para agitar se mueve la perilla. Si no se cuenta con calentadora-agitadora se usa una estufa eléctrica.</p>
				</div>
			</div>
			<a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
   		</aside>
	}
}
