 /**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import Modulo1 from './Modulo1';
import Microbiologia from './Microbiologia';
import VidreriaReactivos from './VidreriaReactivos';

export default class Modulo1Content extends React.Component {
	constructor(props){
		super(props);			
	}	

	render(){								
		if(this.props.params.src=="1"){
			return <div id="page">
				<Modulo1 />						
			</div>						
		}
		if(this.props.params.src=="2"){
			return <div id="page">
				<Microbiologia />						
			</div>						
		}
		if(this.props.params.src=="3"){
			return <div id="page">
				<VidreriaReactivos />						
			</div>						
		}
	}
}


