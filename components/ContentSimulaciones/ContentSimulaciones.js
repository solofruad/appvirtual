/**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import Simulaciones from './Simulaciones';
import Simulacion1 from '../ContentPrincipal/Modal/Modulo2/Modal8';
import uid from 'uid';

export default class ContentSimulaciones extends React.Component {
	constructor(props){
		super(props);		
		this.state = { simulaciones: [], m1show: false};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}
	componentWillMount(){
		$.get('/dirsimulaciones', (simulaciones) => {
      		this.setState({ simulaciones:  simulaciones});
    	});
	}
	open(mod){
		if(mod=='simulacion1') { this.setState({m1show: true}); }		
		else {return false;}
	}
	close(mod){
		if(mod=='modulo2/8') {this.setState({m1show: false});}		
		else {return false;	}
	}
	render(){
		if (this.state.simulaciones.length){
			return <div>
				<Simulaciones simulaciones={this.state.simulaciones} open={this.open}/>
				<Simulacion1 show={this.state.m1show} onHide={this.close}/>
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
