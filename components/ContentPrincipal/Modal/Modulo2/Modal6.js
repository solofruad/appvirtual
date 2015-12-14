/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal6 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/6')
	}
	render(){
			return <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Elaboración</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Fitohormonas</b></h1>
						<span>(Stock 8, 9 y 10)</span><br/>
					</Col>
				</Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>            
            <p className="txt-parrafo">Las fitohormonas o reguladores de crecimiento son compuestos que permiten potenciar el crecimiento y diferenciación de los tejidos vegetales. Las plantas utilizan naturalmente, las auxinas, responsables del crecimiento de los tejidos, formación de callo, desarrollo de primordios foliares y enraizamiento; las citoquininas, favorecen la división celular; y Giberilinas, permiten el crecimiento, rompimiento de la latencia del embrión que involucran el transporte de nutrientes y yemas axilares y apicales para iniciar la floración.</p>
            <p className="txt-parrafo">Los organismos vegetales necesitan para su normal desarrollo fitohormonas, de tal manera que en el cultivo in vitro se aplican sintéticas para impulsar el desarrollo de los explantes. Las más utilizadas son el ANA (ácido naftalenacético), BAP (bencyl  amino purina) y AG3 (ácido giberélico) que corresponde al stock 8, 9 y 10, respectivamente.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Ácido Naftalenacético de Stock 8.</center></th>
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
                    <td>8</td>
                    <td>ANA</td>
                    <td>0,1</td>
                    <td>100 ml</td>
                  </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Bencyl Amino Purina de stock 9.</center></th>
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
                    <td>9</td>
                    <td>BAP</td>
                    <td>0,1</td>
                    <td>100 ml</td>
                  </tr>
              </tbody>
            </Table>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4"><center>Ácido giberélico de stock 10</center></th>
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
                    <td>10</td>
                    <td>AG</td>
                    <td>0,1</td>
                    <td>100 ml</td>
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
