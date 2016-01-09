 /**
 * Modules Dependencies
 */

import React from 'react';
import Modulo1 from './Modulo1';
import Microbiologia from './Microbiologia';
import VidreriaReactivos from './VidreriaReactivos';
import PreparacionMedios from './PreparacionMedios';
import AulaClase from './AulaClase';
import LavadoDestilacion from './LavadoDestilacion';
import Ivernadero from './Ivernadero';
import ModalInfo from './Modal/ModalInfo';

//Importar modales

import ModalAutoclave from './Modal/ModalAutoclave';
import ModalBalanza from './Modal/ModalBalanza';
import ModalCrecimiento from './Modal/ModalCrecimiento';
import ModalDestilador from './Modal/ModalDestilador';
import ModalEnvase from './Modal/ModalEnvase';
import ModalEstereo from './Modal/ModalEstereo';
import ModalEstirilizacion from './Modal/ModalEstirilizacion';
import ModalMicropipetas from './Modal/ModalMicropipetas';
import ModalPhmetro from './Modal/ModalPhmetro';
import ModalPlancha from './Modal/ModalPlancha';
import ModalSiembra from './Modal/ModalSiembra';
import ModalUtencilios from './Modal/ModalUtencilios';
import ModalIvernadero from .'./Modal/ModalIvernadero';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Modulo1Content extends React.Component {
	constructor(props){
		super(props);
		this.state = { mounted:false, crecimiento: false, siembra: false, micropipeta: false, plancha: false, balanza: false, utencilios: false, phmetro: false, estereo: false, estirilizacion:false, envase:false, destilador:false, autoclave:false, ivernadero:false };
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
    }
    getInitialState() {
      return { mounted: false, crecimiento: false, siembra: false, micropipeta: false, plancha: false, balanza: false, utencilios: false, phmetro: false, estereo: false, estirilizacion:false, envase:false, destilador:false, autoclave:false, ivernadero:false };
    }
	open(mod){
		if(mod=='crecimiento') { this.setState({crecimiento: true}); }
		else if(mod=='siembra') {this.setState({siembra: true});}
		else if(mod=='micropipeta') {this.setState({micropipeta: true});}
		else if(mod=='plancha') {this.setState({plancha: true});}
		else if(mod=='balanza') {this.setState({balanza: true});}
		else if(mod=='utencilios') {this.setState({utencilios: true});}
		else if(mod=='phmetro') {this.setState({phmetro: true});}
		else if(mod=='estereo') {this.setState({estereo: true});}
		else if(mod=='estirilizacion') {this.setState({estirilizacion: true});}
		else if(mod=='envase') {this.setState({envase: true});}
		else if(mod=='destilador') {this.setState({destilador: true});}
		else if(mod=='autoclave') {this.setState({autoclave: true});}
		else if(mod=='ivernadero') {this.setState({ivernadero: true});}
		else {return false;}
	}
	close(mod){
		if(mod=='crecimiento') { this.setState({crecimiento: false}); }
		else if(mod=='siembra') {this.setState({siembra: false});}
		else if(mod=='micropipeta') {this.setState({micropipeta: false});}
		else if(mod=='plancha') {this.setState({plancha: false});}
		else if(mod=='balanza') {this.setState({balanza: false});}
		else if(mod=='utencilios') {this.setState({utencilios: false});}
		else if(mod=='phmetro') {this.setState({phmetro: false});}
		else if(mod=='estereo') {this.setState({estereo: false});}
		else if(mod=='estirilizacion') {this.setState({estirilizacion: false});}
		else if(mod=='envase') {this.setState({envase: false});}
		else if(mod=='destilador') {this.setState({destilador: false});}
		else if(mod=='autoclave') {this.setState({autoclave: false});}
		else if(mod=='ivernadero') {this.setState({ivernadero: false});}
		else {return false;}
	}
    componentDidMount(){
      this.setState({ mounted: false });
    }
	recargar(){
    	location.reload()
	}
	componentWillMount(){
      this.getComponent();
    }

	componentDidUpdate(prevProps){
      let oldSrc = prevProps.params.src;
      let newSrc = this.props.params.src;
      if (newSrc != oldSrc){
		this.getComponent();
      	this.recargar();
      }
    }

    getComponent(){
		this.setState({ mounted: false });
    	this.setState({ mounted: true});
    }

	render(){
		var src = this.props.params.src;
        var child = null;
         if(this.state.mounted){
         	if(src=="1"){
         		child = <div id="page" ><Modulo1 /><ModalInfo view="index"/></div>;
         	}
         	if (src=="2") {
         		child = <div id="page" ><Microbiologia /><ModalInfo view="microbiologia"/></div>;
         	}
         	if (src=="3") {
         		child = <div id="page" ><VidreriaReactivos /><ModalInfo view="vidrieria-reactivos"/></div>;
         	}
         	if (src=="4") {
         		child = <div id="page" ><PreparacionMedios /><ModalInfo view="preparacion-medios"/></div>;
         	}
         	if (src=="5") {
         		child =	<div id="page" ><AulaClase /><ModalInfo view="aula-clase"/></div>;
         	}
         	if (src=="6") {
         		child = <div id="page" ><LavadoDestilacion /><ModalInfo view="lavado-destilacion"/></div>;
         	}
         	if (src=="7") {
         		child = <div id="page" ><Ivernadero /><ModalInfo view="ivernadero"/></div>;
         	}
         }
         else{
         	child = <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>;
         }
         return (<div>
         	<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={5000} transitionLeaveTimeout={300}>
				{child}
         	</ReactCSSTransitionGroup>
         	<ModalCrecimiento show={this.state.crecimiento} onHide={this.close} open={this.open}/>
			<ModalSiembra show={this.state.siembra} onHide={this.close} />
			<ModalMicropipetas show={this.state.micropipeta} onHide={this.close} />
			<ModalPlancha show={this.state.plancha} onHide={this.close} />
			<ModalBalanza show={this.state.balanza} onHide={this.close} />
			<ModalUtencilios show={this.state.utencilios} onHide={this.close} />
			<ModalPhmetro show={this.state.phmetro} onHide={this.close} />
			<ModalEstereo show={this.state.estereo} onHide={this.close} />
			<ModalEstirilizacion show={this.state.estirilizacion} onHide={this.close} />
			<ModalEnvase show={this.state.envase} onHide={this.close} />
			<ModalDestilador show={this.state.destilador} onHide={this.close} />
			<ModalAutoclave show={this.state.autoclave} onHide={this.close} />
			<ModalIvernadero show={this.state.ivernadero} onHide={this.close} />
         </div>
         )
	}
}
