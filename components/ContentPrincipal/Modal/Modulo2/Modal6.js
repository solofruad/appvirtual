/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal6 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/6')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>CTVirtual <Label bsStyle='success'>Lavado, destilación y estirilización</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Aula de lavado, destilación y estirilización</h2>
        <p className="txt-parrafo">El proceso de producción de vitroplantas genera materiales que necesitan un lavado especial con productos que limpien grasas y permita remover la mugre (DEXTRAN).</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}
}
