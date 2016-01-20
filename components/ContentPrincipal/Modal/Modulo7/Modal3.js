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
		this.props.onHide.call(null,'modulo7/5')
	}

	render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Rescate y cultivo de embriones cigóticos</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Factores que afectan el cultivo in vitro de embriones cigóticos.</b></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="txt-parrafo">El cultivo de embriones inmaduros utiliza semillas sin madurar como fuente de explante. Con esta técnica se evita el aborto temprano del embrión logrando la regeneración de una planta viable, generalmente en cruces distantes. No obstante, la disección del embrión inmaduros resulta difícil por su escaso desarrollo, el riesgo de lesionarlo y la complejidad del medio de cultivo para continuar el crecimiento de embriones en estados inmaduros. Por otro lado, el cultivo de embriones maduros, provenientes de semillas igualmente maduras, presenta menos problemas durante la disección del embrión, y el medio para su cultivo es mucho mas simple ya que se solidifica con agar y solo contiene sales minerales y sacarosa como fuente de energía.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo7/modal3a.jpg" alt="Factores que afectan el cultivo in vitro"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo7/modal3b.jpg" alt="Factores que afectan el cultivo in vitro"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center">
							<p className="txt-parrafo">Generalmente los embriones cultivados in vitro tienen una germinación precoz, debido a la ausencia de inhibidores presentes en el endospermo y al aumento del potencial osmótico que experimenta el embrión en este tipo de cultivo.</p>
							<p className="txt-parrafo">Litz (1993) y Picca y Cardone (2004) consideran que los factores críticos que afectan el cultivo in vitro de embriones son el medio de cultivo, la os molaridad y los reguladores de crecimiento.  Para el buen desarrollo de un embrión, principalmente en estados inmaduros, la os molaridad es importante. Los azucares adicionados al medio no solo sirven de fuente de energía sino, además, para regular la presión osmótica en el medio requerida en cada etapa del desarrollo del embrión. A  medida que este crece debe ser transferido a medios con reducción progresiva de los niveles de sacarosa.</p>
						</div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
