/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal8 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/8')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>CTVirtual <Label bsStyle='success'>IVERNADERO</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>IVERNADERO</h2>
        <p className="txt-parrafo">Las plantas que se traen de campo, las plantas madres o donadoras, de las que se va a cortar el explante, se debe contar con un ivernadero, debidamente habilitado.</p>
        <p className="txt-parrafo">Cuando las plantas se han seleccionado, se empiezan a cortar los tejidos en los que se encuentran los meristemos apicales del tallo y se pasan a cultivo in vitro. Dichas plantas deben tener un manejo nutricional especial para su buen desarrollo.</p>
        <p className="txt-parrafo">Además, cuando las plantas salen de su etapa in vitro pasan al ivernadero para que nuevamente se puedan adaptar a las condiciones ambientales que la van a rodear durante su crecimiento y producción en campo.</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}
}
