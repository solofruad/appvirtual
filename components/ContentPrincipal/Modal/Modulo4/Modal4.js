/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal4 extends React.Component {
  constructor(props){
    super(props);
  }
  onClose(ev){
    this.props.onHide.call(null,'modulo4/4')
  }
  render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Micropropagaci&oacute;n in vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Preparación de cámara de flujo laminar</b></h1>
            <p>En la cámara de flujo laminar se realizan las siguientes actividades:</p>
          </Col>
        </Row>
        <Row>
          <Col xs={11} sm={11} md={11} lg={11}>
            <ol className="lista">
              <li>Se prende la luz y el flujo</li>
              <li>La luz ultravioleta durante 20 minutos y se deja en reposo 40 minutos</li>
              <li>Limpieza de cámara con alcohol de adentro hacia fuera utilizando algodón</li>
              <li>Se enciende un mechero</li>
              <li>se limpia con alcohol los medios de cultivo, el estereoscopio</li>
              <li>Ubica las cajas Petri, mango de bisturí, pinzas y papel Kraf previamente esterilizados</li>
              <li>La caja Petri se pone en el punto de vista del estereoscopio, el papel kraf debajo de un vaso de vidrio con alcohol al 96%, al mango se le pone la cuchilla y con las pinzas se pone en el interfaz del papel kraf</li>
              <li>A un lado se pone las SD, las aguas D-E y el material vegetal para micropropagar; todo lo mencionado se ejecuta para la extracción de meristemos. Para microestacas no se incluye estereoscopio, ni SD ni agua D-E.</li>
            </ol>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
