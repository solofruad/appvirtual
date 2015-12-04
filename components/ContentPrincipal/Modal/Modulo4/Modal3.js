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
		this.props.onHide.call(null,'modulo4/3')
	}
	render(){
			return <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>micropropagaci&oacute;n in vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Sustancias de limpieza y desinfectantes</b></h1>
            <p>Antes de ir a tomar el explante se debe alistar las sustancias para limpiar y desinfectar el tejido.</p>
          </Col>
        </Row>
				<Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="txt-parrafo">Dentro de las sustancias de limpieza esta el uso de jabón que se prepara al 1%. Esto indica que por cada litro se aplica un 1gr de jabón. El jabón se diluye en agua destilada-estéril (D-E). Para la limpieza se prepara la sustancia desinfectante (SD) 1 (Alcohol) y 2 (Hipoclorito) de acuerdo a lo establecido en la siguiente tabla.</p>
          </Col>
				</Row>
				<Row>
          <Col xs={12} sm={12} md={6} lg={6}>
					<hr className="line-divider"></hr>
					<Table responsive striped bordered condensed hover>
						<thead>
							<tr>
								<th colSpan="3"><center>Sustancias desinfectantes (Manihot esculenta)</center></th>
							</tr>
							<tr>
								<th><b># Sustancia</b></th>
								<th><b>Sustancia</b></th>
								<th><b>Tiempo de exposici&oacute;n</b></th>
							</tr>
						</thead>
						<tbody>
								<tr>
									<td>1</td>
									<td>Alcohol 70%</td>
									<td>20 segundos</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Hipoclorito de Sodio 1%</td>
									<td>5 minutos</td>
								</tr>
						</tbody>
					</Table>
          </Col>
					<Col xs={12} sm={12} md={6} lg={6}>
            <center><img className="img-modal-show" src="public/img/modulo4/modal3.jpg" alt="Planta donadora"/></center>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
	}

}
