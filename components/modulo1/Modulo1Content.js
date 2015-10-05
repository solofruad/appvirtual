 /**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import Modulo1 from './Modulo1';
import Microbiologia from './Microbiologia';
import VidreriaReactivos from './VidreriaReactivos';
import PreparacionMedios from './PreparacionMedios';
import AulaClase from './AulaClase';
import LavadoDestilacion from './LavadoDestilacion';
import Ivernadero from './Ivernadero';
import ModalInfo from './Modal/ModalInfo'


export default class Modulo1Content extends React.Component {
	constructor(props){
		super(props);			
	}	

	render(){								
		if(this.props.params.src=="1"){
			return <div id="page">
				<Modulo1 />			
				<ModalInfo view="index"/>			
			</div>						
		}
		if(this.props.params.src=="2"){
			return <div id="page">
				<Microbiologia />						
				<ModalInfo view="microbiologia"/>			
			</div>						
		}
		if(this.props.params.src=="3"){
			return <div id="page">
				<VidreriaReactivos />	
				<ModalInfo view="vidrieria-reactivos"/>								
			</div>						
		}
		if(this.props.params.src=="4"){
			return <div id="page">
				<PreparacionMedios />
				<ModalInfo view="preparacion-medios"/>						
			</div>						
		}
		if(this.props.params.src=="5"){
			return <div id="page">
				<AulaClase />			
				<ModalInfo view="aula-clase"/>
			</div>						
		}
		if(this.props.params.src=="6"){
			return <div id="page">
				<LavadoDestilacion />	
				<ModalInfo view="lavado-destilacion"/>								
			</div>						
		}
		if(this.props.params.src=="7"){
			return <div id="page">
				<Ivernadero />			
				<ModalInfo view="ivernadero"/>			
			</div>						
		}
	}
}


