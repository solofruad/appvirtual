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
		this.props.onHide.call(null,'modulo5/1')
	}	
	render(){	
		return	<Modal {...this.props}>
			<Modal.Header closeButton>
				<Modal.Title><Label bsStyle='success'>Introducción! </Label></Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
					<h1><b>ETAPA EX VITRO</b></h1>
					<span>(Establecimiento ex vitro, propagación por miniestacas y protocolo para la producción de microestacas)</span><br/>
				</Col>
			</Row><br/>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="txt-into">
					<p><span className="capitalLetter"><i className="fa fa-quote-left"></i></span>Las vitroplantas poseen condiciones controladas y, con el tarro cerrado y sellado, su intercambio gaseoso es mínimo. La regulación estomática in vitro tiene niveles bajos, no obstante cuando la planta sale del frasco se enfrenta a una atsmofera que posee un nivel altísimo de CO2 que puede causar daño foliares y posible muerte de la planta. De tal manera que el cuello de botella de la producción de material a través del uso del cultivo de tejidos es la etapa ex vitro, aun se han reportado datos que alcanzan el 90% de perdidas. </p>
				</Col>
			</Row><br />
			<Row>
				<Col xs={12} sm={12} md={12} lg={12}>
					<p className="txt-parrafo">La aclimatación ex vitro  del material vegetal va permitir aplicar protocolos de miniestacas para potenciar la producción masiva de plantas y su paso a campo.</p>
				</Col>
			</Row>
			</Modal.Body>
			<Modal.Footer>
				<button onClick={this.onClose.bind(this)}>Cerrar</button>
			</Modal.Footer>
		</Modal>
	}
}
