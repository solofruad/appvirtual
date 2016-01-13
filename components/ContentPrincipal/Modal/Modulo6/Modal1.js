/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


export default class Modal1 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo6/1')
	}	
	render(){	
		return	<Modal {...this.props}>
			<Modal.Header closeButton>
				<Modal.Title><Label bsStyle='success'>Introducción! </Label></Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
					<h1><b>Cultivo in vitro de meristemos y ápices</b></h1>
					<span>(Méristemos, Ápices y Aplicaciones del cultivo in vitro de meristemos y Ápices)</span><br/>
				</Col>
			</Row><br/>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="txt-into">
					<p><span className="capitalLetter"><i className="fa fa-quote-left"></i></span>El primer intento de cultivo in vitro de ápices en un medio artificial compuesto por sales inorgánicas y glucosa fue realizado por Robbins en 1922.  Luego Ball (1946) reporto el primer protocolo de regeneración de plantas utilizando meristemos apicales, con lo cual obtuvo plántulas enraizadas aptas para trasplantar en el suelo. A este investigador se le reconoce como el padre de la micropropagación.</p>
				</Col>
			</Row><br />
			<Row>
				<Col xs={12} sm={12} md={12} lg={12}>
					<p className="txt-parrafo">**Morel  y Martin (1952) utilizaron por primera vez el cultivo de meristemos para obtener plantas de dalia y papa libres de virus. Stace-Smith y Mellor (1970)  implementaron la técnica de la termoterapia con el cultivo de meristemos para optimizar la limpieza de  tejido contaminado con virus.</p>
				</Col>
			</Row>
			</Modal.Body>
			<Modal.Footer>
				<button onClick={this.onClose.bind(this)}>Cerrar</button>
			</Modal.Footer>
		</Modal>
	}
}
