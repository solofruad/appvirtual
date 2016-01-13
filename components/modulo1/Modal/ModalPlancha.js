/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalPlancha extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="agitadora-popup" className="avgrund-popup">
	   		<div className="row">
				<div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 cont-modal-show">
					<p className="txt-parrafo">Las medidas en micras como en el caso de la aplicación de reguladores de crecimiento se utiliza la micropitpeta. Este instrumento permite medir en mircolitos () la cantidad de sustancia que se necesita para la aplicación en medio de cultivo de manera precisa y reduciendo el gasto del producto en uso.</p>
				</div>
				<div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>PLANCHA CALENTADORA-AGITADORA</span></h2>
					<img src="public/img/modulo1/maquina_1.jpg" className="img-modal-show" />
				</div>
			</div>
			<a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
   		</aside>
	}
}
