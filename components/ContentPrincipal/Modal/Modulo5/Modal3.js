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
		this.props.onHide.call(null,'modulo5/4')
	}
	render(){
			return <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Componentes</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Componentes del medio de cultivo</b></h1>
            <p>La composición del medio de cultivo está definida por los siguientes requerimientos de los explantes.</p>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Agua. </b></h2> <p className="txt-parrafo">El agua que se utiliza en el laboratorio es destilada. No se recomienda el  uso de aguas “duras” por  poseer altas concentraciones de Ca y Mg que pueden desregular el uso de sales de MS cuando se aplican.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo3/agua.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo3/stocks.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Los stocks.</b></h2><p className="txt-parrafo"> Poseen los macronutrientes, micronutrientes y vitaminas (Stocks 1-6). Se usan de acuerdo a la concentración que poseen y la cantidad de medio de cultivo que se va a preparar; y reducir cuando se complementa con sustancias orgánicas.</p></div>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Fitohormonas.</b></h2><p className="txt-parrafo"> Los reguladores de crecimiento se preparan en los stocks (8-10) para su uso, de acuerdo con el tipo de explante (foto 33);  en algunas ocasiones, en el caso de microestacas, por ejemplo,  pueden ser o no utilizados, con base en criterios científico-técnicos.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo3/Fitohormonas.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo3/carbono.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Fuente de carbono.</b></h2><p className="txt-parrafo"> Por estar cerrado envuelto con cinta vinipel, el frasco de las vitroplantas, entra muy poco CO2. Por tanto, su carencia  se suple con las fuentes de carbono  Mio-inositol y la sacarosa (o azúcar de cocina)</p></div>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Agente gelificante.</b></h2><p className="txt-parrafo"> Para la consistencia semisólida del medio de cultivo se aplica el agente gelificante phytagel (foto 35), el cual, aparte de endurecerlo, facilita que las raíces de la planta u otros tejidos asimilen los nutrientes requeridos.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo3/gelificante.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo3/carbonactivado.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Carbón activado.</b></h2><p className="txt-parrafo"> Se utiliza principalmente cuando se suplementa el medio de cultivo con sustancias orgánicas, pues tiene un efecto antioxidante y disminuye los niveles de contaminación.</p></div>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
						<div className="txt-vertical-center"><h2><b>Ajustar el pH.</b></h2><p className="txt-parrafo"> Se necesita un pH  entre 5,7  y 5,8 para que los explantes puedan crecer normalmente. Por tanto, si el pH está más bajo, se aplica la KOH 1N; si está más alto, se aplica HCL 1N.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo3/ph.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
				<hr className="line-divider"></hr>
				<Row>
          <Col xs={12} sm={12} md={5} lg={5}>
						<img className="img-modal-show" src="public/img/modulo3/organicas.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><h2><b>Sustancias orgánicas.</b></h2><p className="txt-parrafo"> La sustancia orgánica efectiva para suplementar el medio de cultivo MS,  es el agua de coco.</p></div>
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
