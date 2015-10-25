/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal2 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/2')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>CTVirtual <Label bsStyle='success'>SALÓN DE BIOLOGÍA MOLECULAR</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <p className="txt-parrafo">En el cuarto de biología molecular se realiza la caracterización de los organismos vivos a nivel molecular, ejemplo: Detección de proteínas alergéicas en nuestros alimentos, establecimiento del origen genético de productos para el consumo a través de las trazas de sus ADN (denominación de origen).</p>
            <h5><b>Plancha calentadora-agitadora</b></h5>
            <p className="txt-parrafo">Se usa para hervir el agua y agitarla. Es el caso del stock de micronutrientes #5 al baño maría o en la dilución al Phytagel con agua hirviendo y su posterior agitación para que la sustancia se homogenice.</p>
                <img className="img-modal-show" src="public/img/modulo1/maquina_1.jpg" alt="Sala de siembra"/>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <p className="txt-parrafo">Para el funcionamiento de la plancha se coloca un aluminio y se enciende; si se necesita que mande el pulso electro magnético para agitar se mueve la perilla. Si no se cuenta con calentadora-agitadora se usa una estufa eléctrica.</p>
            <h5><b>Micropipeta</b></h5>
                <img className="img-modal-show" src="public/img/modulo1/maquina_6.jpg" alt="Sala de siembra"/>
            <p className="txt-parrafo">Las medidas en micras como en el caso de la aplicación de reguladores de crecimiento se utiliza la micropitpeta. Este instrumento permite medir en mircolitos () la cantidad de sustancia que se necesita para la aplicación en medio de cultivo de manera precisa y reduciendo el gasto del producto en uso.</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
