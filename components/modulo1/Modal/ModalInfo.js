/**
 * Modules Dependencies
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

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
		if(this.props.view=="index"){
			return <div>
					<button	className="boton-info" onClick={this.open.bind(this)}>
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
		if(this.props.view=="microbiologia")		{
			return <div>
				<button	className="boton-info"onClick={this.open.bind(this)}>
		          Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
		        </button>
		        <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="lg" >
					<Modal.Header closeButton>
						<Modal.Title>CTVirtual <Label bsStyle='success'>SALÓN DE BIOLOGÍA MOLECULAR</Label></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col xs={6} sm={6} md={6} lg={6}>
								<p className="txt-parrafo">En el cuarto de biología molecular se realiza la caracterización de los organismos vivos a nivel molecular, ejemplo: Detección de proteínas alergéicas en nuestros alimentos, establecimiento del origen genético de productos para el consumo a través de las trazas de sus ADN (denominación de origen).</p>
								<h5><b>Plancha calentadora-agitadora</b></h5>
								<p className="txt-parrafo">Se usa para hervir el agua y agitarla. Es el caso del stock de micronutrientes #5 al baño maría o en la dilución al Phytagel con agua hirviendo y su posterior agitación para que la sustancia se homogenice.</p>
				        		<img className="img-modal-show" src="public/img/modulo1/maquina_1.jpg" alt="Sala de siembra"/>
							</Col>
							<Col xs={6} sm={6} md={6} lg={6}>
								<p className="txt-parrafo">Para el funcionamiento de la plancha se coloca un aluminio y se enciende; si se necesita que mande el pulso electro magnético para agitar se mueve la perilla. Si no se cuenta con calentadora-agitadora se usa una estufa eléctrica.</p>
								<h5><b>Micropipeta</b></h5>
				        		<img className="img-modal-show" src="public/img/modulo1/maquina_6.jpg" alt="Sala de siembra"/>
								<p className="txt-parrafo">Las medidas en micras como en el caso de la aplicación de reguladores de crecimiento se utiliza la micropitpeta. Este instrumento permite medir en mircolitos () la cantidad de sustancia que se necesita para la aplicación en medio de cultivo de manera precisa y reduciendo el gasto del producto en uso.</p>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<button onClick={this.close.bind()}>Cerrar</button>
					</Modal.Footer>
				</Modal>
			</div>
		}
		if(this.props.view=="vidrieria-reactivos"){
			return <div>
				<button	className="boton-info"onClick={this.open.bind(this)}>
		          Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
		        </button>
		        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>CTVirtual <Label bsStyle='success'>CUARTO DE VIDRERIA Y REACTIVOS</Label></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col xs={12} sm={12} md={5} lg={5}>
								<p className="txt-parrafo">Esta sección posee dos espacios donde van los reactivos. El primero es para los productos sintéticos que necesitan refrigeración y el segundo que no, ya que van en la estantería. Los stocks que se realizan para la preparación de los medios de cultivo o éstps ultimos despues del autoclavado y sellado, se guardan en la nevera</p>
								<p className="txt-parrafo">Por lo anterior que la vidriería y los otros utensilios se designa unos estantes que tienen:</p>
							</Col>
							<Col xs={12} sm={12} md={7} lg={7}>
								<ul>
									<li><i className="fa fa-check"></i>Los frascos y tubos de ensayos donde se vierte el medio de cultivo</li>
									<li><i className="fa fa-check"></i>Tapas</li>
									<li><i className="fa fa-check"></i>Pipetas milimetradas de uno (1) a diez (10)</li>
									<li><i className="fa fa-check"></i>Bombas o peras extractoras</li>
									<li><i className="fa fa-check"></i>Erlenmeyers, bakers y balones aforados de 100 ml a 3000 ml</li>
									<li><i className="fa fa-check"></i>Cajas petri</li>
									<li><i className="fa fa-check"></i>Probetas de 100 ml</li>
									<li><i className="fa fa-check"></i>Barra agitadora</li>
									<li><i className="fa fa-check"></i>Minicucharas o palas para aplicar los reactivos</li>
									<li><i className="fa fa-check"></i>Papel aluminio</li>
									<li><i className="fa fa-check"></i>Papel Kraf</li>
									<li><i className="fa fa-check"></i>Vinipel</li>
									<li><i className="fa fa-check"></i>Pinzas largas</li>
									<li><i className="fa fa-check"></i>Mango de bisturí</li>
									<li><i className="fa fa-check"></i>Cuchilla</li>
								</ul>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<button onClick={this.close.bind()}>Cerrar</button>
					</Modal.Footer>
				</Modal>
			</div>
		}
		if(this.props.view=="preparacion-medios"){
			return <div>
				<button	className="boton-info"onClick={this.open.bind(this)}>
		          Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
		        </button>
		        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>CTVirtual <Label bsStyle='success'>CUARTO DE PREPARACIÓN DE MEDIOS</Label></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12}>
								<h2>Preparación de medios de cultivo<span className="txt-green"></span></h2>
								<br />
								<p className="txt-parrafo">Esta sección debe contar con varios equipos que permitan la preparación y el adecuación de los medios de cultivo.</p>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={6} lg={6}>
								<img src="public/img/modulo1/maquina_9.jpg" className="img-modal-show" />
							</Col>
							<Col xs={6} sm={6} md={6} lg={6}>
								<img src="public/img/modulo1/maquina_3.jpg" className="img-modal-show" />
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<button onClick={this.close.bind()}>Cerrar</button>
					</Modal.Footer>
				</Modal>
			</div>
		}
		if(this.props.view=="aula-clase"){
			return <div>
				<div>
					<button	className="boton-info" onClick={this.open.bind(this)}>
	          		Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
	        		</button>
	        		<a className="pull-right btn-app" href='javascript:document.location.replace("/#/modulo1/1");document.location.reload();'><i className="fa fa-arrow-circle-o-left"></i></a>
        		</div>
			        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
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
							<button onClick={this.close.bind()}>Cerrar</button>
						</Modal.Footer>
					</Modal>
			</div>
		}
		if(this.props.view=="lavado-destilacion"){
			return <div>
				<button	className="boton-info"onClick={this.open.bind(this)}>
		          Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
		        </button>
		        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>CTVirtual <Label bsStyle='success'>Lavado, destilación y estirilización</Label></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h2>Aula de lavado, destilación y estirilización</h2>
						<p className="txt-parrafo">El proceso de producción de vitroplantas genera materiales que necesitan un lavado especial con productos que limpien grasas y permita remover la mugre (DEXTRAN).</p>
					</Modal.Body>
					<Modal.Footer>
						<button onClick={this.close.bind()}>Cerrar</button>
					</Modal.Footer>
				</Modal>
			</div>
		}
		if(this.props.view=="ivernadero"){
			return <div>
				<button	className="boton-info"onClick={this.open.bind(this)}>
		          Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
		        </button>
		        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
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
						<button onClick={this.close.bind()}>Cerrar</button>
					</Modal.Footer>
				</Modal>
			</div>
		}
	}

}
