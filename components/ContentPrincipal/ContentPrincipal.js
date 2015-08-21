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
	render(){
		if (this.state.headers.length){
			return <div>
				<Header headers={this.state.headers} />
				<Modulos modulos={this.state.modulos} />
			</div>	
		}
		else {
			return <div><img src="public/img/load.gif" /></div>
		}	
	}
}