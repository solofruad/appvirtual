/**
 * Modules Dependencies
 * https://github.com/tryolabs/react-examples/tree/master/modal
 */

import React from 'react';
import Header from './Header';
import Modulos from './Modulos';
import $ from 'jquery';
import {Modal} from 'react-bootstrap';
import Modal1 from './Modal/Modulo5/Modal1';
import Modal2 from './Modal/Modulo5/Modal2';
import Modal3 from './Modal/Modulo5/Modal3';
import Modal4 from './Modal/Modulo5/Modal4';

export default class Modulo5 extends React.Component {
	constructor(props){
		super(props);
		this.state = { modulos: [], m1show: false, m2show: false, m3show: false, m4show: false};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}
	getInitialState(){
		return { m1show: false, m2show: false, m3show: false, m4show: false};
	}
	open(mod){
		if(mod=='modulo5/1') { this.setState({m1show: true}); }
		else if(mod=='modulo5/2') {this.setState({m2show: true});}
		else if(mod=='modulo5/4') {this.setState({m3show: true});}
		else if(mod=='modulo5/7') {this.setState({m4show: true});}		
		else {return false;}
	}
	close(mod){
		if(mod=='modulo5/1') {this.setState({m1show: false});}
		else if(mod=='modulo5/2') {this.setState({m2show: false});}
		else if(mod=='modulo5/4') {this.setState({m3show: false});}
		else if(mod=='modulo5/7') {this.setState({m4show: false});}		
		else {return false;	}
	}
	componentWillMount(){
    	$.get('/dirmod5', (modulo4) => {
      		this.setState({ modulos:  modulo4});
    	});
	}
	render(){
		if (this.state.modulos.length){
			return <div>
				<Modulos modulos={this.state.modulos} open={this.open}/>
				<Modal1 show={this.state.m1show} onHide={this.close} open={this.open}/>
				<Modal2 show={this.state.m2show} onHide={this.close} />
				<Modal3 show={this.state.m3show} onHide={this.close} />
				<Modal4 show={this.state.m4show} onHide={this.close} />				
			</div>
		}
		else {
			return <div><img src="public/img/load.gif" /></div>
		}
	}
}
