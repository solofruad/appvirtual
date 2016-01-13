/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalDestilador extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="destilador-popup" className="avgrund-popup avg-width-55">
	    	<div className="row">
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>DESTILADOR</span></h2>
					<img src="public/img/modulo1/maquina_8.jpg" className="img-modal-show" />
	    		</div>
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
					<p className="txt-parrafo">El destilador permite que el agua se evapore para luego obtenerla sin ningún tipo de mineral residual, aunque no estirilizada</p>
					<p className="txt-parrafo">Para su funcionamiento requiere que una de las mangueras se conecte a la fuente de agua, la otra al desagüe (agua que no se evapora) y la última a un recipiente de vidrio (Agua evaporada). Se debe mantener conectado a una toma eléctrica.</p>
				</div>
			</div>
	        <a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
	    </aside>
	}
}
