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
		this.state = { contenido: []};
	}
	componentWillMount(){
		$.get('/dir', (contenido) => {
      	this.setState({ contenido: contenido });
    });
	}
	render(){
		if (this.state.contenido.length){
			return <div>
				<Header contenido={this.state.contenido} />
				<Modulos />
			</div>	
		}
		else {
			return <div><img src="public/img/load.gif" /></div>
		}	
	}
}