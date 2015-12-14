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
		this.props.onHide.call(null,'modulo2/1')
	}
	onClick(ev){
		this.props.open.call(null,'modalMs')
	}
	onClick2(ev){
		this.props.open.call(null,'modalStock')
	}
	render(){
	let mod=1;
			return	<Modal {...this.props} bsSize="large">
				<Modal.Header closeButton>
					<Modal.Title><Label bsStyle='success'>Introducción! </Label></Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>ELABORACIÓN DE STOCKS</b></h1><br/>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} lg={6}>
						<p className="txt-parrafo">Las tejidos vegetales in vitro necesitan unas concentraciones de macro y micronutrientes, vitaminas, fuente de carbono entre otros para su crecimiento y diferenciación. Generalmente estas fuentes son sintéticas por lo que son productos industriales, no obstante se puede suplementar con productos orgánicos como el agua de coco.</p>
						<center>
							<button	className="boton-info" onClick={this.onClick.bind(this)}>Medio MS &nbsp;<i className="fa fa-info-circle"></i></button>
							<button	className="boton-info" onClick={this.onClick2.bind(this)}>Sotck(s) &nbsp;<i className="fa fa-info-circle"></i></button>
						</center>
					</Col>
					<Col xs={12} sm={12} md={6} lg={6}>
						<br /><center><img className="img-modal-show" src="public/img/modulo1/maquina_6.jpg" alt="Sala de siembra"/></center><br /><br />
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12}>
						<h5><b>Elaboración de los Stock´s del medio de cultivo MS</b></h5>
						<p className="txt-parrafo">Las concentraciones que se van a mencionar de los stocks se conocen como las sales de Murashige y Skoog (MS). Los stocks del uno (1) y dos (2) son los macronutrientes, el tres (3), cuatro (4) y cinco (5) micronutrientes, el seis (6) es la vitamina B1 o Tiamina y, el siete (7) es el Mio-inositol. Por otro lado, los stocks ocho (8), nueve (9) y diez (10) son sustancias adicionales al MS, conocidas como reguladores de crecimiento (fitohormonas) que se agregan de acuerdo al tejido vegetal y al tipo de desarrollo de interés. También existen sustancias orgánicas que permiten suplementar los medios de cultivo.</p>
					</Col>
				</Row>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.onClose.bind(this)}>Cerrar</button>
				</Modal.Footer>
			</Modal>
	}

}
