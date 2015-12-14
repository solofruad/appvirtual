/**
 * Modules Dependencies
 */

import React from 'react';
import uid from 'uid';

export default class Modulo1Unit extends React.Component {
	constructor(props){
		super(props);	
	}	
	componentDidMount(){		
		$("img.advancedpanorama").panorama({
	        auto_start: 0,
			start_position: 850,
			viewport_width: screen.width,
			speed: 15000        
	    });	  	    
	}	
	render(){		
		var img=`public/img/modulo1/${this.props.id}.jpg`;		
		return <div>			
			<img key={uid(10)} src={img} className="advancedpanorama" useMap="testmap" alt={this.props.titulo} />
			<map id="testmap" name="testmap"> 
				<area shape="rect" coords="3150,80,3330,380" href="" alt="Sala de Microbiologia" /> 
				<area shape="rect" coords="2590,80,2780,380" href="" alt="Sala de Siembra"  /> 
				<area shape="rect" coords="1980,114,2170,380" href="" alt="Sala de Crecimiento" /> 
				<area shape="rect" coords="1420,80,1550,380" href="" alt="Aula de clase" /> 
				<area shape="rect" coords="1110,80,1240,380" href="" alt="Sala de Preparación de Medios" /> 
				<area shape="rect" coords="380,80,840,380" href="" alt="Sala de Vidreria y Reactivos"/> 
			</map>						
		</div>		
	}
}