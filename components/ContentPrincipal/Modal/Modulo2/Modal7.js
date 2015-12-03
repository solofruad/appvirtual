/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class Modal7 extends React.Component {
	constructor(props){
		super(props);
	}
	onClose(ev){
		this.props.onHide.call(null,'modulo2/7')
	}
	render(){
			return	<Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Elaboración</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className="txt-center">
						<h1><b>Sustancias Orgánicas</b></h1><br/>
					</Col>
				</Row>
        <p className="txt-parrafo">Las sustancias orgánicas son compuestos no sintéticos que se toma de otros vegetales para suplementar el medio de cultivo y disminuir el gasto de sales de MS. En cultivo in vitro  se utilizan bastantes; no obstante el que presenta mejor resultado es el cotiledón líquido, que se usa del agua de coco. Permite reducir costos en la compra de reactivos y favorecer el desarrollo de la planta, pues contiene los micro y macro nutrientes, vitaminas entre otros componentes, también contiene reguladores de crecimiento.</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
			</Modal>
	}
}
