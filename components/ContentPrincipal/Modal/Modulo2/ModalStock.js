/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class ModalStock extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modalStock')
	}
	render(){
	let mod=1;
			return	<Modal {...this.props} bsSize="large">
				<Modal.Header closeButton>
					<Modal.Title><Label bsStyle='success'>Introducción! </Label>ELABORACIÓN DE STOCKS</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Row>
          <Col xs={12} sm={12} md={12} lg={12}>
  					<h5><b>Stock(s)</b></h5>
  					<p className="txt-parrafo">Se denomina Stock(s) a las “sustancias madre” o “sustancias concentradas” de los macronutrientes, micronutrientes, vitaminas, fitohormonas o sustancias orgánicas que se preparan para su uso como fuente de nutrimento en el medio de cultivo.</p>
            <p className="txt-parrafo">Al elaborar un stock se tiene en cuenta lo siguiente: a) el número del stock que se va a preparar, b) el compuesto (sustancia y cantidad), c) cantidad de agua destilada, d) concentración y, e) aplicación dependiendo la cantidad que se necesite para preparar el medio de cultivo.</p>
  					<Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="6"><center>Stocks utilizadas</center></th>
                </tr>
                <tr>
                  <th><b>FUENTE PLANTA</b></th>
                  <th><b>NÚMERO STOCK</b></th>
                  <th><b>NOMBRE COMPUESTO</b></th>
                  <th><b>CONCENTRACIÓN</b></th>
                  <th><b>CANTIDAD (gr)</b></th>
                  <th><b>AGUA DESTILADA</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="5">Macronutrientes</td>
                  <td rowSpan="4">1</td>
                  <td>Nitrato de Amonio</td>
                  <td rowSpan="4">50x</td>
                  <td>8,25</td>
                  <td rowSpan="4">100 ml</td>
                </tr>
                <tr>
                  <td>Nitrato de Potasio</td>
                  <td>9,5</td>
                </tr>
                <tr>
                  <td>Sulfato de Magnesio</td>
                  <td>0,902</td>
                </tr>
                <tr>
                  <td>Monofosfato Potásico</td>
                  <td>0,85</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Cloruro de Calcio</td>
                  <td>333x</td>
                  <td>1,6854</td>
                  <td>15 ml</td>
                </tr>
                <tr>
                  <td rowSpan="7">Micronutrientes</td>
                  <td rowSpan="6">3</td>
                  <td>Ácido Bórico</td>
                  <td rowSpan="6">1000x</td>
                  <td>0,031</td>
                  <td rowSpan="6">1 ml</td>
                </tr>
                <tr>
                  <td>Sulfato de Manganeso</td>
                  <td>0,0845</td>
                </tr>
                <tr>
                  <td>Sulfato de Cobre</td>
                  <td>0,000125</td>
                </tr>
                <tr>
                  <td>Molidato de Sodio</td>
                  <td>0,00125</td>
                </tr>
                <tr>
                  <td>Sulfato de Zinc</td>
                  <td>0,043</td>
                </tr>
                <tr>
                  <td>Cloruro de Cobalto</td>
                  <td>0,000125</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Yoduro de Potasio</td>
                  <td>1000x</td>
                  <td>0,004</td>
                  <td>1 ml</td>
                </tr>
                <tr>
                  <td rowSpan="2">Micronutriente quelado</td>
                  <td rowSpan="2">5</td>
                  <td>Sodio EDTA</td>
                  <td rowSpan="2">200x</td>
                  <td>0,18625</td>
                  <td rowSpan="2">25 ml</td>
                </tr>
                <tr>
                  <td>Sulfato de Hierro</td>
                  <td>0,13925</td>
                </tr>
                <tr>
                  <td>Vitamina</td>
                  <td>6</td>
                  <td>Tiamina</td>
                  <td>50x</td>
                  <td>0,0005</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>Fuente de carbono</td>
                  <td>7</td>
                  <td>Mio-inositol</td>
                  <td>50x</td>
                  <td>0,5</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td rowSpan="3">Fitohormonas</td>
                  <td>8</td>
                  <td>ANA(Ácido Naftalanacético)</td>
                  <td>100x</td>
                  <td>0,001</td>
                  <td>10 ml</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>BAP (Bencyl aminopurina)</td>
                  <td>100x</td>
                  <td>0,001</td>
                  <td>10 ml</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>AG<sub>3</sub>(Ácido giberélico)</td>
                  <td>100x</td>
                  <td>0,001</td>
                  <td>10 ml</td>
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
