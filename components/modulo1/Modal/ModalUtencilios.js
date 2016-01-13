/**
 * Modules Dependencies
 */

import React from 'react';


export default class ModalUtencilios extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="stocks-popup" className="avgrund-popup avg-width-55">
	    	<div className="row">
	    		<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>Utencilios para preparación de Stocks</span></h2>
					<img src="public/img/modulo1/maquina_7.jpg" className="img-modal-show3" />
				</div>
	    	</div>
	        <a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
	    </aside>
	}
}
