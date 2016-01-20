/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Modal4 extends React.Component {
  constructor(props){
    super(props);
  }
  onClose(ev){
    this.props.onHide.call(null,'modulo7/7')
  }
  render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><h4><Label bsStyle='success'>Rescate y cultivo de embriones cigóticos</Label></h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Reguladores del crecimiento.</b></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo7/modal4a.jpg" alt="Reguladores del crecimiento"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><p className="txt-parrafo">El desarrollo del embrión en la planta presenta dos fases: <b>la heterotrófica,</b> en la cual los embriones inmaduros, también denominados pro-embriones, dependen de los nutrientes presentes en el endospermo; y la <b>autotrófica</b>, cuando el embrión maduro es capaz de sintetizar, a partir de sales inorgánicas, las sustancias que necesita para su desarrollo.</p></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
						<p className="txt-parrafo">Los requerimientos de reguladores de crecimiento han sido un tema ampliamente estudiado, especialmente para el cultivo de embriones heterotróficos. Sharma (1976) concluye que a bajas concentraciones de auxinas se promueve el crecimiento normal del embrión; el ácido giberélico (AG) produce alargamiento, mientras que las cito quininas lo inhiben. Collins y Grosser (1984) observaron que embriones inmaduros de híbridos interespecificos  de Trifolium cultivados inicialmente en un medio con alto contenido de sacarosa, un nivel moderado de auxina y una concentración baja de citoquinina detienen su crecimiento después de una o dos semanas. No obstante reanuda su desarrollo normal cuando es transferido a un medio con baja concentración de sacarosa y auxina y una concentración moderada de citoqunina.</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.onClose.bind(this)}>Cerrar</button>
      </Modal.Footer>
      </Modal>
  }

}
