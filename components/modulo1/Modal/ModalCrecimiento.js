/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class ModalCrecimiento extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/1')
	}
	onClick(ev){
		this.props.open.call(null,'modalMs')
	}	
	render(){
		return	<Modal {...this.props}>
			<Modal.Header closeButton>
				<Modal.Title>CTVirtual <Label bsStyle='success'>IVERNADERO</Label></Modal.Title>
			</Modal.Header>
			<Modal.Body> 
				<h2 class="modal-title" style="margin-bottom: 1%"><div style="display: inline-block;margin-right:1%;">CTVirtual</div></h2>
		        <div class="row">
		        	<div style="position: relative;" class="col-md-9 col-lg-9 col-sm-7 col-xs-12">
		        		<span style="position: absolute;z-index: 10;font-size: 1.5em;border-radius: 0;" class='label label-success'>CUARTO DE CRECIMIENTO</span>
		        		<img style="position: relative;" class="img-modal-show" src="public/img/modulo1/9.jpg" alt="Sala de crecimiento"/>
		    		</div>
					<p class="col-md-3 col-lg-3 col-sm-5 col-xs-12" style="text-align: justify">Esta sección es para el desarrollo y diferenciación de las plantas. Posee unos estantes pintados de color blanco con icopores para evitar el crecimiento de agentes patógenos, un timer o temporizador para controlar el fotoperiodo, unas bombillas que brinden la intensidad lumínica adecuada para el creciiento y aire acondicionado para controlar la temperatura.</p>
				</div>       
			</Modal.Body>
			<Modal.Footer>
				<button onClick={this.onClose.bind(this)}>Cerrar</button>
			</Modal.Footer>
		</Modal>
	}
}