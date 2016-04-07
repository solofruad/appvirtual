/**
 * Modules Dependencies
 *
 */

import React from 'react';
import Modulos from './Modulos';
import $ from 'jquery';
import {Modal} from 'react-bootstrap';
import Modal1 from './Modal/Modulo6/Modal1';
import Modal2 from './Modal/Modulo6/Modal2';
import Modal3 from './Modal/Modulo6/Modal3';
import Modal4 from './Modal/Modulo6/Modal4';
import Modal5 from './Modal/Modulo6/Modal5';


export default class Modulo6 extends React.Component {
	constructor(props){
		super(props);
		this.state = { modulos: [], m1show: false, m2show: false, m3show: false, m4show: false,  m5show: false};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}	
	open(mod){
		if(mod=='modulo6/1') { this.setState({m1show: true}); }
		else if(mod=='modulo6/2') {this.setState({m2show: true});}
		else if(mod=='modulo6/3') {this.setState({m3show: true});}
		else if(mod=='modulo6/7') {this.setState({m4show: true});}
		else if(mod=='modulo6/8') {this.setState({m5show: true});}
		else {return false;}
	}
	close(mod){
		if(mod=='modulo6/1') {this.setState({m1show: false});}
		else if(mod=='modulo6/2') {this.setState({m2show: false});}
		else if(mod=='modulo6/3') {this.setState({m3show: false});}
		else if(mod=='modulo6/7') {this.setState({m4show: false});}
		else if(mod=='modulo6/8') {this.setState({m5show: false});}
		else {return false;	}
	}
	componentWillMount(){
    	$.get('/dirmod6', (modulo6) => {
      		this.setState({ modulos:  modulo6});
    	});
	}
	render(){
		if (this.state.modulos.length){
			return <div>
				<Modulos modulos={this.state.modulos} open={this.open}/>
				<Modal1 show={this.state.m1show} onHide={this.close}/>
				<Modal2 show={this.state.m2show} onHide={this.close} />
				<Modal3 show={this.state.m3show} onHide={this.close} />
				<Modal4 show={this.state.m4show} onHide={this.close} />
				<Modal5 show={this.state.m5show} onHide={this.close} />
			</div>
		}
		else {
			return <div className="spinner">
			  <div className="rect1"></div>
			  <div className="rect2"></div>
			  <div className="rect3"></div>
			  <div className="rect4"></div>
			  <div className="rect5"></div>
			</div>
		}
	}
}
