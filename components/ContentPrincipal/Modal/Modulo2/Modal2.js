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
		this.props.onHide.call(null,'modulo2/2')
	}
	render(){
			return	<Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Elaboración</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Macronutrientes</b></h1>
						<span>(Stock 1 y 2)</span><br/>
					</Col>
				</Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>            
            <p className="txt-parrafo">Los macronutrientes son los elementos que necesita la planta en mayor concentración. Estos se caracterizan en primarios (N, P y K) y secundarios (S, Ca y Mg); el C, H y O los obtiene del agua y del aire y fuente de carbono. Los nutrientes que necesita la planta, en mayor cantidad, son brindados por el stock 1 y 2 preparados a 50x y 333x respectivamente.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Macronutrientes de stock 1</center></th>
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
                    <td rowSpan="4">1</td>
                    <td>NO<sub>3</sub>NH<sub>4</sub></td>
                    <td>8,25</td>
                    <td rowSpan="4">100 ml</td>
                  </tr>
                  <tr>
                    <td>KNO<sub>3</sub></td>
                    <td>9,5</td>
                  </tr>
                  <tr>
                    <td>MgS0<sub>4</sub>.7H<sub>2</sub>O</td>
                    <td>0,902</td>
                  </tr>
                  <tr>
                    <td>KH<sub>2</sub>PO<sub>4</sub></td>
                    <td>0,85</td>
                  </tr>
              </tbody>
            </Table>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Macronutrientes de stock 2</center></th>
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
                    <td>2</td>
                    <td>CaCl<sub>2</sub>.H<sub>2</sub>O</td>
                    <td>1,6854</td>
                    <td>15 ml</td>
                  </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <br /><center><img className="img-modal-show" src="public/img/modulo1/maquina_6.jpg" alt="Sala de siembra"/></center><br /><br />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
