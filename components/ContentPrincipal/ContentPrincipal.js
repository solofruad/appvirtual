/**
 * Modules Dependencies
 */

import React from 'react';
import Header from './Header';
import Modulos from './Modulos';
import $ from 'jquery';

export default class ContentPrincipal extends React.Component {
	constructor(props){
		super(props);
		this.state = { headers: [], modulos: [] };
	}
	componentWillMount(){
		$.get('/dirhead', (contenido) => {
      		this.setState({ headers:  contenido});
    	});
    	$.get('/dirmod', (modulos) => {
      		this.setState({ modulos:  modulos});
    	});
	}
	scrollTo(){
		$('html,body').animate({
      scrollTop: $('#contentPrincipal').offset().top
    }, 1000);
		return false;
	}
	render(){
		if (this.state.headers.length){
			return <div>
				<Header headers={this.state.headers} scrollto={this.scrollTo} />
				<Modulos modulos={this.state.modulos} />
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
