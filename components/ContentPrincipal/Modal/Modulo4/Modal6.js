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
		this.props.onHide.call(null,'modulo4/8')
	}
	render(){
			return	<Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Micropropagaci&oacute;n in vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Extracción, siembra e incubación</b></h1><br/>
					</Col>
				</Row>
				<Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><p className="txt-parrafo cl">De las plantas donadoras se corta los explantes apicales, en este caso los de la porción apical del tallo, donde se encuentra (MAT) y se deja sumergir directamente en 1% de NaOCl y después su lavado por 3 A-D-E.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo4/modal6a.jpg" alt="Foto 43"/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo4/modal6b.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><p className="txt-parrafo cl">Teniendo la cámara lista de acuerdo a lo establecido (Preparación de cámara de flujo laminar) se cortan los  se someten a Protocolo de desinfección:</p></div>
							<ol className="lista2">
								<li>Limpieza con jabón 1% y seguido lavado de 3 A-D-E</li>
								<li>Dentro de la cámara de flujo laminar se expone los tejidos a SD 1 durante 20 segundos y luego lavado con 3 A-D-E</li>
								<li>Seguido se sumerge en SD 2 durante 5 minutos y después lavado con 3 A-D-E</li>
							</ol>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
				<Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><p className="txt-parrafo cl">Para sacar el domo meristemático se coloca el explante en la caja de Petri y se disecciona cada uno de los primordios foliares que se encuentran en espiral.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo4/modal6c.jpg" alt="Foto 43"/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo4/modal6d.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><p className="txt-parrafo cl">Después de extraer el meristemo se procede a sembrarlo en un frasco con el medio de cultivo MS-MB1. Para esto se destapa el tarro, se flamea la tapa, luego se mantiene cerca al mechero encendido el frasco se siembra en barrido con la punta del bisturí. Se flamea la boquilla y la tapa, para luego cerrar el tarro, flamearlo y sellarlo con vinipel. Se etiqueta con la fecha, genotipo y medio de cultivo. Se guarda en una caja a oscuridad durante 4 días en un cuarto a 300C. Terminado este tiempo se saca a intensidad lumínica de 3.000 lux y con un fotoperíodo de 16 horas luz y 8 noche.</p></div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
