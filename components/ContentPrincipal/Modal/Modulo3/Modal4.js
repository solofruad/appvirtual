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
    this.props.onHide.call(null,'modulo3/4')
  }
  render(){
      return  <Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Elaboración</Label> Vitaminas</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h5><b>Elaboración de stocks 6</b></h5>
            <p className="txt-parrafo">Generalmente, en el cultivo de tejidos se usa vitaminas del complejo B, principalmente necesita de la vitamina B1 o Tiamina. Designado aquí como stock 6. Éste se puede preparar a una concentración de 50X.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Vitamina B1 de Stock 6</center></th>
                </tr>
                <tr>
                  <th><b>NÚMERO STOCK</b></th>
                  <th><b>COMPUESTO</b></th>
                  <th><b>CANTIDAD (gr)</b></th>
                  <th><b>AGUA DESTILADA</b></th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>6</td>
                    <td>Vitamina B1</td>
                    <td>0,0005</td>
                    <td>100 ml</td>
                  </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <img className="img-modal-show" src="public/img/modulo1/maquina_6.jpg" alt="Sala de siembra"/>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
