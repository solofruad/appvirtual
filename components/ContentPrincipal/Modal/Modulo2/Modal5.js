/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal5 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/5')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>CTVirtual <Label bsStyle='success'>AULA DE CLASE</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Aula de Clase</h2>
        <br />
        <p className="txt-parrafo">Aula de practica y colaboración en las tareas docentes y roles básicos y fundamentales.</p>
        <p className="txt-parrafo">Esta sala se usa para prácticas, desarrollo y presentaciones de largo periodo. Es un espacio que aporta información esencial para el desarrollo posterior y actividades eficaces dentro de las otras áreas.</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}
}
