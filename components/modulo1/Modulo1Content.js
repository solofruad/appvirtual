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
				<ModalInfo />				
			</div>						
		}
		if(this.props.params.src=="2"){
			return <div id="page">
				<Microbiologia />						
			</div>						
		}
		if(this.props.params.src=="3"){
			return <div id="page">
				<VidreriaReactivos />						
			</div>						
		}
		if(this.props.params.src=="4"){
			return <div id="page">
				<PreparacionMedios />						
			</div>						
		}
		if(this.props.params.src=="5"){
			return <div id="page">
				<AulaClase />						
			</div>						
		}
		if(this.props.params.src=="6"){
			return <div id="page">
				<LavadoDestilacion />						
			</div>						
		}
		if(this.props.params.src=="7"){
			return <div id="page">
				<Ivernadero />						
			</div>						
		}
	}
}


