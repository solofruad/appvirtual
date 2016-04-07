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
		this.props.onHide.call(null,'modulo7/8')
	}
	render(){
			return	<Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><Label bsStyle='success'>Rescate y cultivo de embriones cigóticos</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Aplicaciones de la técnica del cultivo de embriones cigóticos</b></h1>
            <p>La técnica de rescate y cultivo de embriones es utilizada principalmente para:</p>
						<ol className="lista">
              <li>Recuperar embriones híbridos provenientes de cruces interespecificos e intergenericos.</li>
              <li>Romper la dormancia  de semillas con largos periodos de latencia.</li>
              <li>Acortar el ciclo de mejoramiento de especies con semillas de periodos largos de latencia.</li>
            </ol>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
				<Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Recuperación de híbridos de cruces interespecíficos o intergenéricos.</b></h2> <p className="txt-parrafo">Una de las metas de un programa de mejoramiento genético vegetal mediante cruces interespecíficos o intergenéricos es transferir una característica (genes) de importancia agronómica y económica de un material silvestre (o lejano) a un material cultivado. Uno de los principales obstáculos de esta estrategia de mejoramiento es el aborto de las semillas híbridas debido a factores de incompatibilidad. Este problema puede ser superado en forma  parcial extrayendo y cultivando el embrión de la semilla en fases tempranas para prevenir el aborto y lograr recuperar el híbrido.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo7/modal5a.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo7/modal5b.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Acortamiento del ciclo de mejoramiento de especies con semillas de latencia larga.</b></h2><p className="txt-parrafo">Las semillas de algunas especies vegetales presentan largos periodos de latencia, lo cual se debe a la presencia de sustancias inhibidoras de la germinación en el endospermo, o a características físicas de la cubierta que protege el embrión y que actúa como barrera al ingreso de agua y oxigeno el interior de las semillas. Este obstáculo se puede obviar mediante el aislamiento y cultivo de los embriones para acelerar la germinación y lograr la producción de plántulas para el programa de mejoramiento.</p></div>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}

}
