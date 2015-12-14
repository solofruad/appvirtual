/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal8 extends React.Component {
  constructor(props){
    super(props);
  }
  onClose(ev){
    this.props.onHide.call(null,'modulo4/10')
  }
  render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Micropropagaci&oacute;n in vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Crecimiento de microestacas.</b></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img className="img-modal-show" src="public/img/modulo4/modal8.jpg" alt="Microestacas de yuca (M. esculenta) variedad brasilera."/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <p className="txt-parrafo">Los tarros se llevan a cuarto de crecimiento que presenta las siguientes características: temperatura de 300C, Luminosidad de 3.000 lux y un fotoperíodo de 16 horas luz y 8 noches. Para mantener el atmosfera estéril se deja alcohol e hipoclorito en diferentes puntos del cuarto para su volatilización.</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
