/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


export default class Modal5 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo4/7')
	}
	render(){
			return	<Modal {...this.props}>
				<Modal.Header closeButton>
					<Modal.Title><Label bsStyle='success'>Micropropagaci&oacute;n in vitro</Label></Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Meristemos</b></h1>
						<p>Los tejidos vegetales, que presentan mayor nivel de totipotencia son los meristemos.</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12}>
						<center><p className="txt-parrafo">Los meristemos generalmente se encuentran ubicados en el ápice del tallo, meristemo apical del tallo (MAT),  o, la raíz, meristemo apical de la raíz (MAR). Existen, también, los meristemos axilares (MA) o intercalares (MI), que se encuentran en la posición nodal o entrenudos. Estos tejidos (MAT, MAR y MA) poseen mayor totipotencia, elevadas tasas de división celular (mitosis) por ser puntos de crecimiento e indiferenciación; que fácilmente en un medio de cultivo idóneo pueden generar una nueva planta.</p></center>
					</Col>
				</Row>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.onClose.bind(this)}>Cerrar</button>
				</Modal.Footer>
			</Modal>
	}

}
