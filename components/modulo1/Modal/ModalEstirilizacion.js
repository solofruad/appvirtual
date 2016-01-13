/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalEstirilizacion extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="asas-popup" className="avgrund-popup avg-width-55" >
	    	<div className="row">
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>Esterilizador de Asas</span></h2>
					<img src="public/img/modulo1/maquina_9.jpg" className="img-modal-show3" />
	    		</div>
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
					<p className="txt-parrafo">Cuenta con un elemento central libre de asbesto, que utiliza el calentamiento infrarrojo para producir 815°C. Estiriliza al instante (7 segundos) asas, instrumentos de borosilicato o metal, bocas de pipetas y demás material utilizado en el laboratorio. El elemento de calentamiento está protegido por una cámara de acero inoxidable perforada, para proteger al usuario contra un contacto accidental.</p>
	    		</div>
	        </div>
	        <a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
	    </aside>
	}
}
