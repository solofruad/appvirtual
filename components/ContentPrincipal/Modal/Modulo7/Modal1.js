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
		this.props.onHide.call(null,'modulo7/1')
	}	
	render(){	
		return	<Modal {...this.props} bsSize="large">
			<Modal.Header closeButton>
				<Modal.Title><Label bsStyle='success'>Introducción! </Label></Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
					<h1><b>Rescate y cultivo de embriones cigóticos</b></h1>					
				</Col>
			</Row><br/>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="txt-into">
					<p><span className="capitalLetter"><i className="fa fa-quote-left"></i></span>La técnica de rescate y cultivo de embriones in vitro consiste en aislar y cultivar embriones cigóticos inmaduros con problemas de desarrollo, en un medio de cultivo artificial que contiene los requerimientos nutricionales que sustituyen a los del endospermo.</p>
				</Col>
			</Row><br />
			<Row>
				<Col xs={12} sm={12} md={12} lg={12}>
					<p className="txt-parrafo">Los conceptos que se presentan en esta sección fueron tomados de Reed (2005), Litz (1993), Pierik (1990), Hu y Ferreira (1998), Peralta (1990), Picca y Cardone (2004), Sharma et al. (1996) y Collins y Grosser (1984), quienes han trabajado intensamente al respecto.</p>
					<p className="txt-parrafo">El desarrollo de un embrión cigótico en una planta presenta un estado temprano de carácter heterotrófico en el cual el embrión se desarrolla a expensas de los nutrientes del endospermo (ya que tiene una baja capacidad de síntesis) y un estado tardío de carácter autotrófico. Para la regeneración de plantas mediante el rescate y cultivo in vitro se pueden utilizar embriones tanto maduros como inmaduros.</p>
				</Col>
			</Row>
			</Modal.Body>
			<Modal.Footer>
				<button onClick={this.onClose.bind(this)}>Cerrar</button>
			</Modal.Footer>
		</Modal>
	}
}
