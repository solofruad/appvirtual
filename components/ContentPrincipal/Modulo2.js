/**
 * Modules Dependencies
 * https://github.com/tryolabs/react-examples/tree/master/modal
 */

import React from 'react';
import Header from './Header';
import Modulos from './Modulos';
import $ from 'jquery';
import Modal1 from './Modal/Modulo2/Modal1';
import {Modal} from 'react-bootstrap';

export default class Modulo2 extends React.Component {
	constructor(props){
		super(props);
		this.state = { modulos: [], m1show: false, m2show: false, m3show: false, m4show: false, m5show: false, m6show: false, m7show: false, m8show: false };
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}
	getInitialState(){
		return { m1show: false, m2show: false, m3show: false, m4show: false, m5show: false, m6show: false, m7show: false, m8show: false };
	}	
	open(mod){
		if(mod=='modulo2/1') { this.setState({m1show: true}); }
		else if(mod=='modulo2/2') {this.setState({m2show: true});}
		else if(mod=='modulo2/3') {this.setState({m3show: true});}
		else if(mod=='modulo2/4') {this.setState({m4show: true});}
		else if(mod=='modulo2/5') {this.setState({m5show: true});}
		else if(mod=='modulo2/6') {this.setState({m6show: true});}
		else if(mod=='modulo2/7') {this.setState({m7show: true});}
		else if(mod=='modulo2/8') {this.setState({m8show: true});}			
		else {return false;}
	}
	close(mod){
		if(mod=='modulo2/1') {this.setState({m1show: false});}
		else if(mod=='modulo2/2') {this.setState({m2show: false});}
		else if(mod=='modulo2/3') {this.setState({m3show: false});}
		else if(mod=='modulo2/4') {this.setState({m4show: false});}
		else if(mod=='modulo2/5') {this.setState({m5show: false});}
		else if(mod=='modulo2/6') {this.setState({m6show: false});}
		else if(mod=='modulo2/7') {this.setState({m7show: false});}
		else if(mod=='modulo2/8') {this.setState({m8show: false});}			
		else {return false;	}
	}
	componentWillMount(){		
    	$.get('/dirmod2', (modulo2) => {
      		this.setState({ modulos:  modulo2});      	
    	});
	}
	render(){
		if (this.state.modulos.length){
			return <div>				
				<Modulos modulos={this.state.modulos} open={this.open}/>
				<Modal1 show={this.state.m1show} onHide={this.close} />
			</div>	
		}
		else {
			return <div><img src="public/img/load.gif" /></div>
		}	
	}
}