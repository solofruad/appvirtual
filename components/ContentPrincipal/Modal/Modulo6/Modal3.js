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
		this.props.onHide.call(null,'modulo6/3')
	}

  render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Cultivo in vitro de meristemos y ápices</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Ápices</b></h1><br/>
          </Col>
        </Row>
        <Row>
					<Col xs={12} sm={12} md={6} lg={6}>
						<center><img className="img-modal-show" src="public/img/modulo6/modal3.png" alt="Medio de cultivo"/></center>
					</Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <p className="txt-parrafo">Los análisis histológicos permiten diferenciar un meristemo de un ápice. Según Roca (1980) un meristemo apical está conformado por el tejido joven mas próximo al primordio (domo meristemático) foliar del tallo con tamaño menor que 0.1-0.3 mm, mientras que un ápice esta formado por el meristemo apical acompañado de varios primordios. Ambas partes se encuentran localizadas tanto en las yemas apicales como en las laterales cuyas células se diferencian hasta formar los tejidos  que conforman el cuerpo de la planta (soma). Estas estructuras presentan una alta organización; por tanto, mantienen la estabilidad genética.</p>
						<p className="txt-parrafo">El desarrollo de la yema apical ejerce un efecto de control sobre las yemas basales, lo cual evita su desarrollo. Este fenómeno se conoce como dominancia apical y se debe a la acción de AIA sintetizado en las yemas apicales que se distribuye en forma basipetala y causa un estado de dormancia en las yemas laterales. No obstante, esta acción puede ser eliminada por la aplicación exógena de citoquininas o mediante la poda de las yemas apicales.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
          </Col>

        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
