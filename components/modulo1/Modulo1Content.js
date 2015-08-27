/**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import Modulo1 from './Modulo1';

export default class Modulo1Content extends React.Component {
	constructor(props){
		super(props);	
		this.state = { modulo1: [] };
	}
	componentWillMount(){		
		$.get('/dirmod1', (modulo1) => {
      		this.setState({ modulo1:  modulo1});      	
    	});
	}	

	render(){								
		return <div id="page">
			<Modulo1 modulo1={this.state.modulo1} />						
		</div>				
	}
}