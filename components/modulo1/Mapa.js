/**
 * Modules Dependencies
 */

import React from 'react';
import uid from 'uid';
import Areas from './Areas';

export default class Mapa extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){
		return <map id="testmap" name="testmap"> 			
			{
				this.props.hijos.map((content) => {	
					return <Areas coord={content.coord}
								url={content.url}
								alt={content.alt} />
				})				
			}
		</map>		
	}
}