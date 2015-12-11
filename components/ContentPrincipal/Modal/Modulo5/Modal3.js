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
		this.props.onHide.call(null,'modulo5/4')
	}
	
  render(){
      return  <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title><Label bsStyle='success'>Etapa Ex Vitro</Label></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Propagación por miniestacas</b></h1>
            <p>El número de plantas obtenidas en cultivo de tejidos aumenta significativamente con el uso de la técnica de miniestacas.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <center><p className="txt-parrafo"><span className="capitalLetter"><i className="fa fa-angle-double-right"></i></span>Para este propósito, después de la aclimatación de las vitroplantas se realizan cortes diagonales uninodales. Es aconsejable que la planta no presente total lignificación en el tallo, en busca que la brotación y enraizamiento sea más rápido.</p></center>
          </Col>
        </Row>        
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.onClose.bind(this)}>Cerrar</button>
        </Modal.Footer>
      </Modal>
  }

}
