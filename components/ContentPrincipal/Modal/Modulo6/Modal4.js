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
    this.props.onHide.call(null,'modulo6/7')
  }
  render(){
      return  <Modal {...this.props} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title><Label bsStyle='success'>Cultivo in vitro de meristemos y ápices</Label></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <h1><b>Aplicaciones del cultivo in vitro de meristemos y ápices.</b></h1>
            <p>Algunas de las aplicaciones de mayor uso del cultivo de meristemos y ápices incluyen : (1) la micropropagación; (2) la erradicación de patógenos, especialmente de origen viral; (3) la conservación de germoplasma in vitro; (4) el intercambio de germoplasma. </p>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><h2><b>La micropropagación. </b></h2> <p className="txt-parrafo">a propagación in vitro o micropropagación se realiza a través de subcultivos continuos, obtenidos a partir de ciclos previos de crecimiento in vitro. El tejido objeto de  propagación puede ser obtenido mediante el desarrollo de yemas axilares, inducción de yemas o brotes adventicios, y por embriogénesis somática.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo6/modal4a.jpg" alt="Medio de cultivo"/>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo6/modal4b.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><h2><b>Inducción de yemas o brotes de adventicios. </b></h2><p className="txt-parrafo"> es el procedimiento mediante el cual un tejido adventicio (yema o brote) forma un novo en un área o tejido diferente al que normalmente lo forma. En condiciones in vitro es posible inducir un brote o yema a partir de un segmento de tallo, hoja, raíz, entre otras estructuras, donde no existen zonas meristemáticas. El subcultivo in vitro, realizado periódicamente a partir de estructuras adventicias, puede, teóricamente, producir plántulas en forma indefinida.</p></div>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><h2><b>Embriogénesis somática.</b></h2><p className="txt-parrafo"> es aquella ruta de regeneración celular que posibilita la formación de un embrión a partir de células somáticas (2n) y no como producto de la fusión de gametos (n). Esta es la vía teórica más rápida para propagar en forma masiva plantas; ya que por este medio se puede producir miles de embriones somáticos a partir de un tejido somático (predeterminado) o suspensión celular. Durante este proceso una sola Célula es capaz de dividirse y diferenciarse hasta neoformar un embrión somático el cual, posteriormente, puede originar una planta completa.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo6/modal4c.png" alt="Medio de cultivo"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="txt-vertical-center">
              <p className="txt-parrafo">La principal ventaja de este proceso es la producción de un gran número de plantas (de alta escala) con bajo costo, en comparación con los métodos antes descritos; no obstante, su principal desventaja es la baja conversión de embrión a panta y la alta dependencia de ocurrencia o inducción de la ruta asociada con la especie vegetal utilizada y la posibilidad de ocurrencia de variación somaclonal.</p>
            </div>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="txt-center">
            <p><span className="capitalLetter"><i className="fa fa-chevron-right"></i></span>La propagación de un material mediante cultivo in vitro de meristemos y ápices se puede realizar siguiendo las etapas: (1) establecimiento del cultivo, (2) desarrollo y multiplicación celular, (3) enraizamiento del explante en condiciones in vitro o ex vitro, y (4) transferencia a condiciones ex vitro.</p>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo6/modal4d.jpg" alt="Medio de cultivo"/>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center">
              <h2><b>La erradicación de patógenos. </b></h2>
              <p className="txt-parrafo"> Las plantas en condiciones naturales son susceptibles a ataques de bacterias, hongos, virus y nematodos. Aunque la desinfección de los explantes elimina microorganismos localizados en la superficie de la planta, este tratamiento no permite la eliminación de organismos sistémicos.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="txt-vertical-center">
              <p className="txt-parrafo">El proceso de limpieza interna puede efectuar mediante el cultivo de meristemas (domo meristemático acompañado máximo con 1- 2 primordios) obtenidos a partir de material o tejido infectado (positivo) tratado con termoterapia, quimioterapia, electroterapia o crioterapia. La distribución diferencial o asimétrica de partículas virales a medida que se acerca al tejido meristemático y la poca conexión de esta zona con el tejido desarrollado ofrece la posibilidad de obtener un tejido limpio mediante cultico in vitro.</p>
            </div>
          </Col>
        </Row>
        <hr className="line-divider"></hr>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="txt-vertical-center"><h2><b>La conservación de germoplasma in vito.</b></h2><p className="txt-parrafo">as técnicas de cultivo in vitro son una alternativa para conservar especies de propagación vegetativa, las cuales en condiciones naturales están expuestas a ataques de patógenos, efectos ambientales y deficiencias de nutrientes. Así mismo, el sistema in vitro garantiza la producción de material libre de patógenos en condiciones reducidas de espacio disponible para programas de intercambio de germoplasma.</p></div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img className="img-modal-show" src="public/img/modulo6/modal4e.jpg" alt="Medio de cultivo"/>
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
