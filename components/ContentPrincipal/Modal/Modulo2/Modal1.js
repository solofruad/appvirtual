/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal1 extends React.Component {	
	onClose(ev){
		this.props.onHide.call(null,'modulo2/1')
	}
	render(){	
	let mod=1;	
			return	<Modal {...this.props}>
				<Modal.Header closeButton>
					<Modal.Title>CTVirtual</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h2>Hola, <span className="txt-green">Bienvenido!</span></h2>
					<br /><br />
					<h4>En el laboratorio se desarrollan procedimientos de cultivo in vitro.</h4><br />
					<p className="txt-parrafo">Posee diferentes secciones para el control sanitario y el manejo de material vegetal. Las secciones de entrada y salida, lavado y estirilización cuarto de vidrieria y reactivos, cuarto de preparación de medios, cuarto de siembra y de crecimiento. <Label bsStyle='success'>Comienza ahora!</Label></p>						
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.props.onClose.bind(this)}>Cerrar</button>
				</Modal.Footer>
			</Modal>
	}

}