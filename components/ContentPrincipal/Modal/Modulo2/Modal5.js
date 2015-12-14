/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal5 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/5')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Elaboración</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Fuente de carbono</b></h1>
						<span>(Stock 7)</span><br/>
					</Col>
				</Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>            
            <p className="txt-parrafo">Las fuentes de carbono le brindan a los tejidos vegetales energía y regulación osmótica. El Mio-inositol es una de las más utilizadas. Generalmente se prepara el stock 7 a una concentración de 50X, aunque se recomienda hacer aplicación directa.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<Table responsive striped bordered condensed hover>
							<thead>
								<tr>
									<th colSpan="4"><center>Macronutrientes de stock 7</center></th>
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
										<td>7</td>
										<td>MIO-INOSITOL</td>
										<td>0,5</td>
										<td>100 ml</td>
									</tr>
							</tbody>
						</Table>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
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
