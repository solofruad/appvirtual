/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal7 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo4/9')
	}
	render(){
			return <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Micropropagaci&oacute;n in vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Microestacas: regeneración de brotes.</b></h1>
            <p>Después de sembrar el tejido meristemático la planta dura dos meses para generar brote (tallo, peciolo y hojas).</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
						<p className="txt-parrafo">El subcultivo se realiza a través de cortes diagonales uninodales a los brotes obtebidos, generando microestacas que se siembran en medio de cultivo MS-MB2 para el desarrollo de raíces, tallo y hojas. Se etiqueta los tarros con el genotipo (Brasilera), fecha y medio de cultivo.</p>
          </Col>
				</Row>
				<Row>
          <Col xs={10} sm={10} md={10} lg={10}>
            <img className="img-modal-show4" src="public/img/modulo4/modal7.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
	}

}
