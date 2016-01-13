/**
 * Modules Dependencies
 */

import React from 'react';

export default class ModalEstereo extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="estereo-popup" className="avgrund-popup avg-width-55">
	    	<div className="row">
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>Estereo Microscopio</span></h2>
					<img src="public/img/modulo1/maquina_3.jpg" className="img-modal-show3" />
	    		</div>
	    		<div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
					<p className="txt-parrafo">El estéreo microscopio, o tambien conocido como lupa binocular, es un instrumento óptico que produce una imagen aumentada del objeto que se observa a través de ella. La lupa binocular forma una imagen de un tamaño aproximado de entre 20 y 40 veces mayor que el objeto que estamos observando. Este instrumento permite visualizar muestras opacas, tridimensionales y sin ningún tipo de preparación (minerales, pequeños, insectos, objetos pequeños, etc.)</p>
	    		</div>
	        </div>
	        <a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
	    </aside>
	}
}
