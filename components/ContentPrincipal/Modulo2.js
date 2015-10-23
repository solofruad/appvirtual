/**
 * Modules Dependencies
 * https://github.com/tryolabs/react-examples/tree/master/modal
 */

import React from 'react';
import Header from './Header';
import Modulos from './Modulos';
import $ from 'jquery';

export default class ContentPrincipal extends React.Component {
	constructor(props){
		super(props);
		this.state = { modulos: [] };
	}
	componentWillMount(){		
    	$.get('/dirmod2', (modulo2) => {
      		this.setState({ modulos:  modulo2});      	
    	});
	}
	render(){
		if (this.state.modulos.length){
			return <div>				
				<Modulos modulos={this.state.modulos} />
			</div>	
		}
		else {
			return <div><img src="public/img/load.gif" /></div>
		}	
	}
}