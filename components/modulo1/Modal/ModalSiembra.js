/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalSiembra extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="modal-siembra" className="avgrund-popup">
	        <h2 className="modal-title avg-margin-bottom"><div className="avg-titulo-modal">CTVirtual</div></h2>
	        <div className="row">
				<p className="col-md-7 col-lg-7 col-sm-6 col-xs-12 justify">
					Esta sección se realiza el proceso de micropropagación del material vegetal. Se requiere una cámara de flujo laminar y una cabina para guardar los materiales estériles de uso en el proceso de siembra.
					<br /><br />
					La cámara de flujo laminar posee tres botones: uno para encender el flujo que limpia el aire a través de unos filtros y empuja para evitar entrada de partículas de polvo o microrganismos; el otro es la luz blanca; y el último, la luz ultravioleta; la conexión se hace para que sea fuera del cuarto de siembra.
					<br /><br />
					No obstante, se sugiere suspender el botón que esta en la cámara de flujo laminar y generar un dispositivo que permita encenderla y apagarla desde fuera del cuarto con el fin de evitar posibles daños que puedan causar efectos cancerígenos, teratogénicos o de otro tipo.
				</p>
				<div className="col-md-5 col-lg-5 col-sm-6 col-xs-12 relative">
	        		<span className='label label-success avg-alt-img'>CUARTO DE SIEMBRA</span>
	        		<img className="img-modal-show relative" src="public/img/modulo1/8.jpg" alt="Sala de siembra"/>
	    		</div>
			</div>
		 	<a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
   		</aside>
	}
}
