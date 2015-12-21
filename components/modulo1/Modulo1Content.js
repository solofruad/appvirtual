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
import ModalInfo from './Modal/ModalInfo';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Modulo1Content extends React.Component {
	constructor(props){
		super(props);
		this.state = { mounted:false };
    }
    getInitialState() {
      return { mounted: false };
    }
    componentDidMount(){
      this.setState({ mounted: true });
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
         </div>
         )
	}
}
