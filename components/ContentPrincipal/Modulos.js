/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


export default class Modulos extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <Grid id="modulo">
			<Row>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="pages/modulo_1/index.html" className="mod">
				      	<img src="public/img/1.png" alt="Modulo 1" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 1. Conociendo el Laboratorio</h3>
			    				<p>Paseo Virtual. Encontramos secciones de entrada y salida, lavado y esterilización, cuarto de vidriería y reactivos</p>    				
			    			</div>
				      	</div>
		      		</a>
				</Col>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="pages/modulo_2/index.html" className="mod">
				      	<img src="public/img/2.png" alt="Modulo 2" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 2. Preparación de Stocks</h3>
			    				<p>Elaboración de STOCKS para usar como fuente de nutrimento en el medio de cultivo.</p>    				
			    			</div>
				      	</div>
		    		</a>
				</Col>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="#" className="mod">
				      	<img src="public/img/3.png" alt="Modulo 3" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 3. Preparación de Medios</h3>
			    				<p>Elaboración de Medios.</p>    				
			    			</div>
				      	</div>
		    		</a>
				</Col>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="#" className="mod">
				      	<img src="public/img/4.png" alt="Modulo 4" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 4. Preparación de Medios</h3>
			    				<p>Elaboración de Medios.</p>    				
			    			</div>
				      	</div>
		    		</a>
				</Col>
			</Row>
			<Row>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="#" className="mod">
				      	<img src="public/img/5.png" alt="Modulo 5" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 5. Preparación de Medios</h3>
			    				<p>Elaboración de Medios.</p>    				
			    			</div>
				      	</div>
		    		</a>
				</Col>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="#" className="mod">
				      	<img src="public/img/6.png" alt="Modulo 6" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 6. Preparación de Medios</h3>
			    				<p>Elaboración de Medios.</p>    				
			    			</div>
				      	</div>
				    </a>
				</Col>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="#" className="mod">
				      	<img src="public/img/7.png" alt="Modulo 7" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 7. Preparación de Medios</h3>
			    				<p>Elaboración de Medios.</p>    				
			    			</div>
				      	</div>
				    </a>
				</Col>
				<Col xs={6} sm={6} md={3} lg={3} className="img-modulo">
					<a href="#" className="mod">
				      	<img src="public/img/8.png" alt="Modulo 8" className="img_contenido" />
				      	<div className="info-image">
				      		<div className="center-vertically">	      
			    				<h3>Modulo 8. Preparación de Medios</h3>
			    				<p>Elaboración de Medios.</p>    				
			    			</div>
				      	</div>
				    </a>
				</Col>
			</Row>
		</Grid>
	}
}