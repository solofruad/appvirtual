/**
 * Modules Dependencies
 */

import React from 'react';
import ContentPrincipal from './ContentPrincipal/ContentPrincipal';
import Menu from './nav/Menu';

export default class Inicio extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){
		return <div>
			<Menu />
			<ContentPrincipal />
		</div>
	}
}