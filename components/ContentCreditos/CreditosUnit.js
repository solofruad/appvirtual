/**
 * Modules Dependencies
 */

import React from 'react';
import {Col} from 'react-bootstrap';


export default class CreditosUnit extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var css = `img-modulo box-mod bm${this.props.id} box-contacto3`;	
		let result;	
		if (this.props.avatar == 'n'){
			result = <Col xs={6} sm={6} md={3} lg={3} className={css}>
				 <div className="box-contacto-container">
					<small className="box-contacto-header">{this.props.rol}</small><br />
					<div className="box-line">_______________________</div>
					<p>{this.props.nombre}</p>
					<small>{this.props.informacion}</small>						
				</div>
			</Col>
		}
		else{
			result = <Col xs={6} sm={6} md={3} lg={3} className={css}>
			 	<img src={this.props.avatar} className="img-modulo" />
			</Col>
		}
		return result;
	}
}




	/*return <div id="creditos" className="site-wrapper3">
		 	<div className="site-wrapper-inner">
		 		<div className="container">
		 			<div className="row">
		 				<div className="col-md-6 col-lg-6 img-modulo box-mod bm5 box-contacto">
		 					<small className="box-contacto-header">INVESTIGADOR PRINCIPAL</small><br />
		 					<div className="box-line">____________________________</div>
		 					<p>Oscar Agudelo Varela</p>
		 					<div className="circle-text"><div>Información</div></div>
		 				</div>
		 				<div className="col-md-6 col-lg-6 img-modulo box-mod bm6 box-contacto"> 
		 					<small className="box-contacto-header">AUXILIAR INVESTIGADOR</small><br />
		 					<div className="box-line">____________________________</div>
		 					<p>Miguel M. Bonilla Morales</p>
		 					<div className="circle-text"><div>Información</div></div>				
		 				</div>
		 			</div>
		 			<div className="row">
		 				
		 				<div className="col-md-3 col-lg-3 img-modulo box-mod bm4">
		 					<img src="public/img/logo_unillanos.png" className="img-modulo" />
		 				</div>
		 				<div className="col-md-3 col-lg-3 img-modulo box-mod bm3 box-contacto2">
		 					<small className="box-contacto-header">DESARROLLADOR DE SOFTWARE</small><br />
		 					<div className="box-line">_______________________________</div>
		 					<p>Néstor E. Suat Rojas</p>
		 					<div className="circle-text2"><div>Información</div></div>	
		 				</div>
		 				<div className="col-md-3 col-lg-3 img-modulo box-mod bm1 box-contacto2">
		 					<small className="box-contacto-header">DESARROLLADOR DE SOFTWARE</small><br />
		 					<div className="box-line">_______________________________</div>
		 					<p>David R. Grandas C.</p>
		 					<div className="circle-text2"><div>Información</div></div>
		 				</div>
		 				<div className="col-md-3 col-lg-3 img-modulo box-mod bm4">
		 					<img src="public/img/logo_grupo.png" className="img-modulo" />
		 				</div>
		 			</div>
		 			<div className="row">
		 				<div className="col-md-3 col-lg-3 ">
			 				<div className="row box-mod bm4 box-contacto3">
			 					<small className="box-contacto-header">APROBADO Y FINANCIADO POR</small><br />
		 						<div className="box-line">_______________________________</div>
		 						<p>Dirección general de investigaciones</p> 	
		 						<small>UNIVERSIDAD DE LOS LLANOS</small>					
			 				</div>
			 				<div className="row box-mod bm7 box-contacto3">
			 					<small className="box-contacto-header">DERECHOS RESERVADOS<spam className="glyphicon glyphicon-copyright-mark"></spam></small><br />2015
		 						<div className="box-line">_______________________________</div>
		 						<p>Primera Edición, Villavicentio - Meta</p> 	
		 						<small>UNIVERSIDAD DE LOS LLANOS</small>	
			 				</div>
			 				
		 				</div>
		 				<div className="col-md-6 col-lg-6 box-img">
		 				</div>
		 				<div className="col-md-3 col-lg-3 ">
			 				<div className="row box-mod bm4 box-contacto3">
			 					<small className="box-contacto-header">GRUPO DE INVESTIGACIÓN</small><br />
		 						<div className="box-line">_______________________________</div>
		 						<p>Horizonte Mediático</p> 	
		 						<small>Director: Alfonso Herrera Méndez</small>					
			 				</div>
			 				<div className="row box-mod bm7 box-contacto3">
			 					<small className="box-contacto-header">PROYECTO DE INVESTIGACIÓN</small><br />
		 						<div className="box-line">_______________________________</div>
		 						<small>Desarrollo de laboratorio virtual de cultivo de tejidos vegetales, utilizando una estrategia metacognitiva para mejorar el aprendizaje de los estudiantes de Ingeniería Agronómica y Lic. en Producción Agropecuaria de la Universidad de los Llanos.
								</small> 	
		 						
			 				</div>
			 				
		 				</div>
		 			</div>
		 		</div>
		 	</div>
		 </div>*/