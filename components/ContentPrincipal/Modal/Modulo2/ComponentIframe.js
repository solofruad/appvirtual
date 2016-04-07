/**
 * Modules Dependencies
 */

import React from 'react';

export default class ComponentIframe extends React.Component {
	constructor(props){
		super(props);
		this.iframe = this.iframe.bind(this);
	}	
	iframe(){
		return {__html: this.props.iframe }
	}
	render(){
		return <div>
			<div dangerouslySetInnerHTML={this.iframe()}/>
		</div>
	}
}
