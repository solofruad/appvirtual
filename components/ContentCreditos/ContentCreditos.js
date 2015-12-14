/**
 * Modules Dependencies
 */

import React from 'react';
import Creditos from './Creditos';
import $ from 'jquery';

export default class ContentCreditos extends React.Component {
	constructor(props){
		super(props);
		this.state = { creditos: [] };
	}
	componentWillMount(){
		$.get('/dircred', (creditos) => {
      		this.setState({ creditos:  creditos});      	
    	});
	}
	render(){
		if (this.state.creditos.length){
			return <div>
				<Creditos creditos={this.state.creditos} />				
			</div>	
		}
		else {
			return <div><img src="public/img/load.gif" /></div>
		}	
	}
}