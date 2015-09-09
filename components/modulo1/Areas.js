/**
 * Modules Dependencies
 */

import React from 'react';


export default class Areas extends React.Component {
	constructor(props){
		super(props);	
	}	
	
	render(){
		let coord = `${this.props.coord}`;
		let url = `${this.props.url}`;
		let alt = `${this.props.alt}`;
		let clase = `panorama-area area${this.props.count}`;
		return <div>
			<area shape="rect" className={clase} coords={this.props.coord} href={url} alt={alt} />
			<area shape="rect" className={clase} coords={this.props.coord} href={url} alt={alt} />
		</div>
	}
}