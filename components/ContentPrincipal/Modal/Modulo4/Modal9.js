/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


export default class Modal9 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo4/11')
	}
	render(){
			return	<Modal {...this.props} bsSize="large">
				<Modal.Header closeButton>
					<Modal.Title><Label bsStyle='success'>Micropropagaci&oacute;n in vitro</Label></Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Propagación masiva por microestacas.</b></h1>
						<p>Las apicales se siembra aparte pues su crecimiento es más rápido.</p>
          </Col>
        </Row>
				<Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><p className="txt-parrafo cl">Después de que la vitroplanta haya desarrollado sus tejidos (brote de meristemo y regeneración de plántula microestaca) se procede aplicar para la propagación masiva el subcultivo de cada vitroplanta obtenida para extraer entre 3 y 4 microestacas nodales y una apical.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo4/modal9a.jpg" alt="Cortes de microestacas en yuca (M. esculenta)."/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo4/modal9b.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><p className="txt-parrafo cl">Las apicales se siembra aparte pues su crecimiento es más rápido. Se utilizan el MS-MB3 que no contiene ningún regulador de crecimiento, y el tiempo de crecimiento va de 5 a 8 semanas para seguir en el proceso de multiplicación masiva o paso a la etapa ex vitro.</p></div>
          </Col>
        </Row>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.onClose.bind(this)}>Cerrar</button>
				</Modal.Footer>
			</Modal>
	}

}
