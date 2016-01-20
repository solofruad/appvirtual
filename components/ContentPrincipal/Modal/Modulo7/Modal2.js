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
		this.props.onHide.call(null,'modulo7/2')
	}
	render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Eventos importantes en el desarrollo de esta técnica</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Eventos importantes en el desarrollo de esta técnica.</b></h1><br/>
					</Col>
				</Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="txt-parrafo">El desarrollo de la técnica de rescate y cultivo de embriones se caracteriza por la ocurrencia de varios eventos importantes. En 1940 Hanning(citado por Litz,1993) realizo por primera vez un cultivo in vitro de embriones cigóticos maduros de plantas. Posteriormente, en 1924, Dietrich (citado por Pierik, 1990) realizo estudios para determinar si era posible regenerar plantas a partir de embriones sin que estos hubiesen completado su periodo de dormancia. Van Overbeek et al., (1941) demostraron que el agua de coco estimula el desarrollo de embriones de datura, lo que contribuyó al desarrollo de las investigaciones sobre cultivo in vitro de embriones para reducir el ciclo de mejoramiento genético en Iris. Estos eventos marcaron el inicio de la aplicación, asociándola a esquemas de cruces interespecíficos e intergenéricos.</p>
          </Col>
				</Row>
				<Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <center><img className="img-modal-show" src="public/img/modulo7/modal2.jpg" alt="Medio de cultivo"/></center>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
