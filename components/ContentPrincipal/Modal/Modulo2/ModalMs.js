/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class ModalMS extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modalMs')
	}
	render(){
			return	<Modal {...this.props} bsSize="large">
				<Modal.Header closeButton>
					<Modal.Title><Label bsStyle='success'>Introducción! </Label>ELABORACIÓN DE STOCKS</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Row>
          <Col xs={12} sm={12} md={12} lg={12}>
  					<h5><b>Medio de cultivo MS</b></h5>
  					<p className="txt-parrafo">El  medio de cultivo  se conoce como MS por las siglas de los apellidos de los orientales Murashige y Skoog, quienes estandarizaron el uso de las sales del medio basal a unas concentraciones específicas. Por esta razón también se usa el término de sales de MS o de Murashige y Skoog.</p>
  					<Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="3"><center>Sales de Murashige y Skoog (MS)</center></th>
                </tr>
                <tr>
                  <th><b>NOMBRE COMPUESTO</b></th>
                  <th><b>COMPUESTO</b></th>
                  <th><b>CANTIDAD (mg/L)</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nitrato de Amonio</td>
                  <td>NO<sub>3</sub>NH<sub>4</sub></td>
                  <td>1650</td>
                </tr>
                <tr>
                  <td>Nitrato de Potasio</td>
                  <td>KNO<sub>3</sub></td>
                  <td>1900</td>
                </tr>
                <tr>
                  <td>Sulfato de Magnesio</td>
                  <td>MgSO<sub>4</sub>.7H<sub>2</sub>O</td>
                  <td>370</td>
                </tr>
                <tr>
                  <td>Monofosfato Potásico</td>
                  <td>KH<sub>2</sub>PO<sub>4</sub></td>
                  <td>170</td>
                </tr>
                <tr>
                  <td>Cloruro de Calcio</td>
                  <td>CaCl<sub>2</sub>.H<sub>2</sub>O</td>
                  <td>440</td>
                </tr>
                <tr>
                  <td>Ácido Bórico</td>
                  <td>H<sub>3</sub>BO<sub>3</sub></td>
                  <td>6,2</td>
                </tr>
                <tr>
                  <td>Sulfato de Manganeso</td>
                  <td>MnSO<sub>4</sub>.H<sub>2</sub>O</td>
                  <td>16,2</td>
                </tr>
                <tr>
                  <td>Sulfato de Cobre</td>
                  <td>CuSO<sub>4</sub>.5H<sub>2</sub>O</td>
                  <td>0,025</td>
                </tr>
                <tr>
                  <td>Molibdato de Sodio</td>
                  <td>NaMoO<sub>4</sub>.2H<sub>2</sub>O</td>
                  <td>0,25</td>
                </tr>
                <tr>
                  <td>Sulfato de Zinc</td>
                  <td>ZnSO<sub>4</sub>.7H<sub>2</sub>O</td>
                  <td>8,6</td>
                </tr>
                <tr>
                  <td>Cloruro de Cobalto</td>
                  <td>CoCl<sub>2</sub>.5H<sub>2</sub>O</td>
                  <td>0,025</td>
                </tr>
                <tr>
                  <td>Yoduro de Potasio</td>
                  <td>KI</td>
                  <td>0,83</td>
                </tr>
                <tr>
                  <td>Sodio EDTA</td>
                  <td>NaEDTA</td>
                  <td>37,3</td>
                </tr>
                <tr>
                  <td>Sulfato de Hierro</td>
                  <td>FeSO<sub>4</sub></td>
                  <td>27,8</td>
                </tr>
                <tr>
                  <td>Tiamina</td>
                  <td></td>
                  <td>0,10</td>
                </tr>
                <tr>
                  <td>Mio-inositol</td>
                  <td></td>
                  <td>100</td>
                </tr>
              </tbody>
            </Table>
          </Col>
				</Row>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.onClose.bind(this)}>Cerrar</button>
				</Modal.Footer>
			</Modal>
	}

}
