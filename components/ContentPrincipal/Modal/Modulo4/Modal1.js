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
		this.props.onHide.call(null,'modulo3/1')
	}
	render(){
	let mod=1;
			return	<Modal {...this.props}>
				<Modal.Header closeButton>
					<Modal.Title><Label bsStyle='success'>Introducción! </Label></Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>PREPARACIÓN DE MEDIOS DE CULTIVO</b></h1><br/>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12}>
						<center><p className="txt-parrafo">Las plantas necesitan un soporte para su desarrollo radicular y sostenimiento: nutrientes, vitaminas, fuente de carbono y reguladores de crecimiento para un  efectivo establecimiento <i>in vitro</i>  y para su posterior adaptación <i>ex vitro</i>.  El medio de cultivo debe cumplir requisitos estandarizados para que la producción de vitroplantas no presente ninguna complicación.</p></center>
					</Col>
				</Row><br />
				<Row>
					<Col xs={12} sm={12} md={12} lg={12}>
						<p><center>En este capitulo podrás encontrar lo necesario para continuar con el aprendizaje de <span className="txt-green">cultivo de tejidos vegetales</span>, recuerda tienes al final un ejercicio práctico para que interactues y refuerces aún más en la preparación en un laboratorio. </center></p>
						<center><Label bsStyle='success'>Medios de Cultivo</Label>&nbsp;<Label bsStyle='success'>Componentes del medio de cultivo</Label>&nbsp;<Label bsStyle='success'>Simulación</Label></center>
					</Col>
				</Row>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.onClose.bind(this)}>Cerrar</button>
				</Modal.Footer>
			</Modal>
	}

}
