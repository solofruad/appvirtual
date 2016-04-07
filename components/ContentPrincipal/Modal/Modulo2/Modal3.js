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
		this.props.onHide.call(null,'modulo2/3')
	}
	render(){
			return <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><Label bsStyle='success'>Elaboración</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Micronutrientes</b></h1>
						<span>(Stock 3, 4 y 5)</span><br/>
					</Col>
				</Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="txt-parrafo">Los micronutrientes son elementos que la planta requiere en menor cantidad. Estos son el Boro (B), Manganeso (Mn), Zinc (Zn), Cobre (Cu), Cobalto (Co), Molibdato (Mo), Cloro (Cl), Yodo (I) e Hierro (Fe).</p>
            <p className="txt-parrafo">Los micronutrientes que se aplican al medio de cultivo están divididos en 3 stocks. El stock 3, 4 y 5 y sus concentraciones se van aumentar a 1000X, 1000X y 200X, respectivamente. El stock 5 se aplica el NaEDTA en 10 ml de agua destilada. Luego en un Baker se aplica 15ml de agua destilada se pone al baño maría y se aplica el FeSO4. Terminadas de preparar, las sustancias se mezclan y se llevan a un volumen de 25mL. Se debe cubrir con papel aluminio.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Micronutrientes de stock 3</center></th>
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
                    <td rowSpan="6">3</td>
                    <td>H<sub>3</sub>BO<sub>3</sub></td>
                    <td>0,031</td>
                    <td rowSpan="6">1 ml</td>
                  </tr>
                  <tr>
                    <td>MnSO<sub>4</sub>.H<sub>2</sub>O</td>
                    <td>0,0845</td>
                  </tr>
                  <tr>
                    <td>CuSO<sub>4</sub>.5H<sub>2</sub>O</td>
                    <td>0,000125</td>
                  </tr>
                  <tr>
                    <td>NaMoO<sub>4</sub>.2H<sub>2</sub>O</td>
                    <td>0,00125</td>
                  </tr>
                  <tr>
                    <td>ZnSO<sub>4</sub>.7H<sub>2</sub>O</td>
                    <td>0,043</td>
                  </tr>
                  <tr>
                    <td>CoCl<sub>2</sub>.5H<sub>2</sub>O</td>
                    <td>0,000125</td>
                  </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Micronutrientes de stock 4</center></th>
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
                    <td>4</td>
                    <td>KI</td>
                    <td>0,004</td>
                    <td>1 ml</td>
                  </tr>
              </tbody>
            </Table>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Micronutrientes de stock 5</center></th>
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
                    <td rowSpan="2">5</td>
                    <td>NaEDTA</td>
                    <td>0,18625</td>
                    <td rowSpan="2">25 ml</td>
                  </tr>
                  <tr>
                    <td>FeSO<sub>4</sub></td>
                    <td>0,13925</td>
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
