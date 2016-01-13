/**
 * Modules Dependencies
 */

import React from 'react';


export default class ModalPhmetro extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return	<aside id="phmetro-popup" className="avgrund-popup avg-width-55">
	    	<div className="row">
	    		<div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 cont-modal-show">
			        <p className="txt-parrafo">El pH metro permite determinar la medida exacta en que se encuentra una sustancia que va de 0 a 14, cuando es menor que 7 se puede decir que esta ácido, en 7 neutro y mayor básico. En el cultivo invitro el pH se sugiere que oscile entre 5,7 y 5,8 ligeramente ácido para que la planta pueda absorber idóneamente los nutrientes que requiere para su crecimiento.</p>
			        <p className="txt-parrafo">El electrodo (punta o lápiz) del pH metro debe estar sumergido en KCL 3M. Cada vez que se va a medir se estabiliza el pH con sustancia Buffer. Se hace el respectivo lavado antes y después de cada operación para optimizar su duración.</p>
		        </div>
			   	<div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 cont-modal-show">
					<h2><span className='label label-success des-modal-show'>PH-METRO</span></h2>
					<img src="public/img/modulo1/maquina_2.jpg" className="img-modal-show" />
				</div>
	        </div>
	        <a className="boton pull-right" href="javascript:closeDialog();">Cerrar</a>
    	</aside>
	}
}
