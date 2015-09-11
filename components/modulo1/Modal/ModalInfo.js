/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

export default class ModalInfo extends React.Component {
	constructor(props){
		super(props);	
		this.state = { showModal: false};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}	
	getInitialState(){
		return { showModal: false };
	}
	close(){
		this.setState({ showModal: false });
	}
	open(){
		this.setState({ showModal: true });
	}

	render(){
		return <div>
			<button	className="boton-info"onClick={this.open.bind(this)}>
	          Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
	        </button>
	        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
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
					<button onClick={this.close.bind()}>Cerrar</button>
				</Modal.Footer>
			</Modal>
		</div>
	}

}