/**
 * Modules Dependencies
 */

import React from 'react';
import Header from './Header';
import Modulos from './Modulos';

export default class ContentPrincipal extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <div>
			<Header />
			<Modulos />
		</div>
	}
}