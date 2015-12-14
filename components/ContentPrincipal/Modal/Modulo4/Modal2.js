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
		this.props.onHide.call(null,'modulo4/2')
	}
	render(){
			return	<Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>micropropagaci&oacute;n in vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Planta donadora</b></h1>
						<p>De la planta donadora o planta madre es donde se toma el explante.</p>
					</Col>
				</Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <p className="txt-parrafo">El explante es el tejido vegetal que se corta para empezar el cultivo in vitro. Sin embargo, el material que se cultive, se debe garantizar libre de patógenos y el genotipo de interés (brasilera). Los meristemos apicales son los mejores tejidos  ya que los haces vasculares (xilema y floema) no irrigan directamente el domo meristemático y, por ser los puntos de crecimiento que presentan los niveles más altos de totipotencia  y células indiferenciadas.</p>
						<p className="txt-parrafo">Antes de hacer la toma de explantes apicales del tallo (se utiliza la variedad brasilera) debe estar  un mínimo un mes en invernadero, bajo condiciones controladas,  libre de agentes patógenos: el llamado estado de cuarentena. También se recomienda extraer  los tejidos de plantas juveniles.</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <center><img className="img-modal-show" src="public/img/modulo4/modal2.jpg" alt="Planta donadora"/></center>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
