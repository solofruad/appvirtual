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
		this.props.onHide.call(null,'modulo4/1')
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
						<h1><b>MICROPROPAGACIÓN  IN VITRO</b></h1>
						<span>(Planta donadora, Sustancias de limpieza y desinfectantes, Preparación de cámara de flujo laminar, Meristemos, Extracción, siembra e incubación, Corte de explantes después de protocolo de desinfección, Microestacas, Crecimiento de microestacas)</span><br/>
					</Col>
				</Row><br/>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-into">
						<p><span className="capitalLetter"><i className="fa fa-quote-left"></i></span>El cultivo de tejidos vegetales incluye diferente técnicas de micropropagación in vitro: siembra de meristemos, óvulos, anteras, embriones y tejidos radiculares, caulinares, peciolares, foliares y florales; no obstante,  cuando las vitroplantas se han desarrollado, se puede llevar directamente a la etapa ex vitro o  multiplicar el material obtenido. Por eso para propagación asexual se pueden utilizar los meristemos axilares y apicales, obteniendo de 3 a 5 microestacas.</p>
					</Col>
				</Row><br />
				<Row>
					<Col xs={12} sm={12} md={12} lg={12}>
						<p><center>En este capitulo podrás encontrar lo necesario para continuar con el aprendizaje de <span className="txt-green">cultivo de tejidos vegetales.</span></center></p>
					</Col>
				</Row>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.onClose.bind(this)}>Cerrar</button>
				</Modal.Footer>
			</Modal>
	}

}
