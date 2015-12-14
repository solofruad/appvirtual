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
    this.props.onHide.call(null,'modulo5/7')
  }
  render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Etapa Ex Vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Protocolo para la producción de microestacas.</b></h1>
            <p>La intención de este proceso es que fortalezca la producción de vitroplantas. Las miniestacas presentan ventajas, pues no requieren los cuidados de aclimatación. El siguiente protocolo es para la generación de miniestacas:</p>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="title-list-modal"><b>Selección de planta aclimatada: </b><span>debe presentar tallo  más herbáceo que leñoso, generación y desarrollo de tejidos vigorosos, y adecuada fertilización. </span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>La planta no debe estar infectada o infestada por algún agente patógeno</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal4a.jpg" alt="Planta  (M. esculenta) aclimatada lista para miniestacas."/>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal4b.jpg" alt="Miniestaca  (M. esculenta) sembrada en sustrato."/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <p className="title-list-modal"><b>Los cortes uninodales o binodales diagonales se realizan con una cuchilla de bisturí </b><span>desinfestada en NaOCl al 3%.</span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>Se aplica, enseguida, el  protocolo de desinfección por inmersión: Cal (3%) y fungicida (1%) por 2 minutos. Las miniestacas se siembran en el sustrato que puede ser el mismo utilizado en la etapa ex vitro.</p>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <p className="title-list-modal"><b>Aproximadamente entre la primera y segunda semana  aparece el primer brote de hojas y, </b><span>su crecimiento tarda entre 7-8 semanas. </span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>Acá se encuentra lista para ser llevada a campo. No se recomienda realizar de las plantas obtenidas por las miniestacas, nuevamente el procedimiento. Como labores agronómicas se mantiene el riego cada dos días y se realiza la fertilización edáfica o foliar semanal.</p>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal4c.jpg" alt="Planta  (M. esculenta) generada a través de miniestacas."/>
          </Col>
        </Row>
        <hr className="line-divider"></hr>        
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
