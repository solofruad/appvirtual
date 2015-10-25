/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal4 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/4')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>CTVirtual <Label bsStyle='success'>CUARTO DE PREPARACIÓN DE MEDIOS</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2>Preparación de medios de cultivo<span className="txt-green"></span></h2>
            <br />
            <p className="txt-parrafo">Esta sección debe contar con varios equipos que permitan la preparación y el adecuación de los medios de cultivo.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <img src="public/img/modulo1/maquina_9.jpg" className="img-modal-show" />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <img src="public/img/modulo1/maquina_3.jpg" className="img-modal-show" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
