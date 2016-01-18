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
        <Modal.Title><h4><Label bsStyle='success'>Etapa Ex Vitro</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Establecimiento ex vitro</b></h1>
            <p>En esta etapa se saca la planta del frasco a un ambiente favorable para su buen desarrollo. Los siguientes pasos son los que se deben tener en cuenta para el establecimiento de las plantas a condiciones naturales:</p>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="title-list-modal"><b>Escoger la vitroplanta  que ya tenga el tamaño ideal: </b><span>cuando toca la tapa del frasco. </span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>Ocurre, generalmente, después de entre un mes y dos de estar subcultivada y al presentar de 5 a 8 nudos.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2a.jpg" alt="Vitroplanta lista para etapa ex vitro."/>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2b.jpg" alt="Vitroplantas semidestapadas para aclimatazción."/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="title-list-modal"><b>Se puede dejar los tarros semi-destapados hasta cuatro días, </b><span>fuera del cuarto de crecimiento.</span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>Con una leve radiación solar de 7am a 9 am y de 3pm a 5 pm.</p></div>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="title-list-modal"><b>Luego de la anterior, se hace la extracción. </b><span>Se quita el vinipel y la tapa.</span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>Se golpea suavemente la base del tarro y delicadamente se saca la planta del frasco. Utilizando agua, se retirara los residuos del gel. </p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2c.jpg" alt="Extracción de planta (M. esculenta) del frasco."/>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2d.jpg" alt="Salida de la planta del frasco."/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="title-list-modal"><b>Se lava las raíces con abundante agua, </b><span>se quita las hojas basales o “bajeras”.</span></p></div>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="title-list-modal"><b>Sembrar en sustrato (1:1 Aserrín y humus solido) esterilizado. </b><span>También se puede utilizar en la misma proporción cascarilla.</span></p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2e.jpg" alt="Siembra de planta (M. esculenta) en sustrato estéril"/>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2f.jpg" alt="Cámara humedad para la planta (M. esculenta)."/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center">
              <p className="title-list-modal"><b>Poner vaso con perforaciones en la base durante dos semanas </b><span>para que la planta genere un microclima</span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>que le permita regular el intercambio gaseoso, temperatura y luminosidad en menor grado.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
              <p className="txt-parrafo">En la segunda semana se levanta de un lado para dejarlo en diagonal y permitir que aumente un poco la salida y entrada de gases. Se sugiere irrigar 20ml de agua día de por medio y un palo de paleta rotulado con el genotipo de planta y la fecha de transplante.</p>
              <p className="txt-parrafo">Se coloca la planta en radiación solar, durante la primera semana, de 7 am a 10 am y de 2 pm a 5 pm, sin exposición directa al sol (polisombra 50%). En la segunda,  se puede exponer durante todo el día, sin exposición directa al sol (polisombra 50%).</p>            
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="title-list-modal"><b>Dos semanas después del transplante se retira el vaso </b><span>y se mantiene 6 semanas más.</span></p><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>Aunque el sustrato contiene nutrientes se recomienda realizar una fertilización edáfica o foliar semanal.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2g.jpg" alt="Crecimiento de planta obtenida in vitro."/>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo5/modal2h.jpg" alt="Planta (M. esculenta) para sembrar a campo obtenida por cultivo de tejidos."/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="txt-into"><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>A la 8 semana, la planta puede salir a campo o, coger otra vía, para aumentar la producción del material a través de miniestacas.</p></div>
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
