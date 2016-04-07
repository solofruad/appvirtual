/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import ComponentIframe from './ComponentIframe';

export default class Modal8 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/8')
	}  
	render(){
    let iframe = '<iframe src="public/simulaciones/stocks/stock1/index.html"></iframe>'; 
		return	<Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title>CTVirtual <Label bsStyle='success'>Preparación de stocks</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ComponentIframe iframe={iframe} />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
		</Modal>
	}
}
