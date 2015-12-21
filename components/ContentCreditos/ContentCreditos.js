/**
 * Modules Dependencies
 */

import React from 'react';
import Creditos from './Creditos';

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
