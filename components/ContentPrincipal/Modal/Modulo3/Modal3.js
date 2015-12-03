/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal3 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo3/3')
	}
	render(){
			return <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Elaboración</Label> Componentes del medio de cultivo</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3><b>Componentes del medio de cultivo</b></h3>
            <p className="txt-parrafo">La composición del medio de cultivo está definida por los requerimientos de los explantes:</p>
          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={8} md={8} lg={8}>

          </Col>
          <Col xs={8} sm={8} md={4} lg={4}>
            <img className="img-modal-show" src="public/img/modulo3/medio.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={8} md={4} lg={4}>

          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>

          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={8} md={8} lg={8}>

          </Col>
          <Col xs={8} sm={8} md={4} lg={4}>
            <img className="img-modal-show" src="public/img/modulo3/medio.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={8} md={4} lg={4}>

          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>

          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={8} md={8} lg={8}>

          </Col>
          <Col xs={8} sm={8} md={4} lg={4}>
            <img className="img-modal-show" src="public/img/modulo3/medio.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={8} md={4} lg={4}>

          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>

          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={8} md={8} lg={8}>

          </Col>
          <Col xs={8} sm={8} md={4} lg={4}>
            <img className="img-modal-show" src="public/img/modulo3/medio.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
	}

}
