/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal3 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/3')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>CTVirtual <Label bsStyle='success'>CUARTO DE VIDRERIA Y REACTIVOS</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <p className="txt-parrafo">Esta sección posee dos espacios donde van los reactivos. El primero es para los productos sintéticos que necesitan refrigeración y el segundo que no, ya que van en la estantería. Los stocks que se realizan para la preparación de los medios de cultivo o éstps ultimos despues del autoclavado y sellado, se guardan en la nevera</p>
            <p className="txt-parrafo">Por lo anterior que la vidriería y los otros utensilios se designa unos estantes que tienen:</p>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <ul>
              <li><i className="fa fa-check"></i>Los frascos y tubos de ensayos donde se vierte el medio de cultivo</li>
              <li><i className="fa fa-check"></i>Tapas</li>
              <li><i className="fa fa-check"></i>Pipetas milimetradas de uno (1) a diez (10)</li>
              <li><i className="fa fa-check"></i>Bombas o peras extractoras</li>
              <li><i className="fa fa-check"></i>Erlenmeyers, bakers y balones aforados de 100 ml a 3000 ml</li>
              <li><i className="fa fa-check"></i>Cajas petri</li>
              <li><i className="fa fa-check"></i>Probetas de 100 ml</li>
              <li><i className="fa fa-check"></i>Barra agitadora</li>
              <li><i className="fa fa-check"></i>Minicucharas o palas para aplicar los reactivos</li>
              <li><i className="fa fa-check"></i>Papel aluminio</li>
              <li><i className="fa fa-check"></i>Papel Kraf</li>
              <li><i className="fa fa-check"></i>Vinipel</li>
              <li><i className="fa fa-check"></i>Pinzas largas</li>
              <li><i className="fa fa-check"></i>Mango de bisturí</li>
              <li><i className="fa fa-check"></i>Cuchilla</li>
            </ul>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
