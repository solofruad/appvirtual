/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal2 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo3/2')
	}
	render(){
			return	<Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Elaboración</Label> Medio de cultivo</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h5><b>Medio de cultivo</b></h5>
            <p className="txt-parrafo">El medio de cultivo da al explante cultivado in vitro los nutrientes, vitaminas, fuente de carbono y sostén para un desarrollo idóneo. Como ya se había mencionando en el capítulo anterior, el medio utilizado está estandarizado con base  en las sales de Murashige y Skoog. Para el crecimiento de meristemos o microestacas, el medio de cultivo es suplementado con reguladores de crecimiento o productos orgánicos.</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <center><img className="img-modal-show" src="public/img/modulo3/medio.jpg" alt="Medio de cultivo"/></center>
          </Col>
        </Row>  
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="txt-parrafo">El uso de los componentes del medio, cuando se realiza el caldo nutritivo, al igual que las condiciones del cuarto de crecimiento, permite el desarrollo de las raíces, tallo, peciolo y hojas.</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
