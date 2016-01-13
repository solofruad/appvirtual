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
		this.props.onHide.call(null,'modulo6/2')
	}
	render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Cultivo in vitro de meristemos y ápices</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>        
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1><b>Méristemos</b></h1><br/>
            <p className="txt-parrafo">Un meristemo es una estructura compuesta por células no diferenciadas y totipotentes en constante y rápida división celular. Se presenta con células pequeñas, de pared celular delgada, de forma poliédrica, en las cuales el núcleo ocupa la mayor parte  del volumen celular y se caracteriza por la presencia de abundantes y pequeñas vacuolas.</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <center><img className="img-modal-show" src="public/img/modulo6/modal2.jpg" alt="Medio de cultivo"/></center>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="txt-parrafo">Los meristemos son  tejidos totipotentes que se multiplican en forma activa y neoforman tejidos diferenciados y células meristemáticas nuevas. Son responsables del crecimiento de las plantas y se reconocen dos tipos: <b>meristemos primarios,</b> responsables del crecimiento longitudinal de la planta y se encuentran localizados en los extremos del tallo, la raíz y las yemas; y <b>meristemos secundarios</b>, responsables del engrosamiento de los tallos y las raíces debido a divisiones celulares que ocurren en el cambium vascular.</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
