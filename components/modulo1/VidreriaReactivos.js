/**
 * Modules Dependencies
 */

import React from 'react';

export default class VidreriaReactivos extends React.Component {
	constructor(props){
		super(props);	
	}
	render(){		
		return <div>
			<img src="public/img/modulo1/3.jpg" className="advancedpanorama" useMap="testmap" alt="Laboratorio de Biotecnología" />			
				<map id="testmap" name="testmap"> 
					<area shape="rect" coords="2820,235,2950,420" href="javascript:openBalanzaDialog();" alt="Balanza Analitica" /> 
					<area shape="rect" coords="3030,320,3180,400" href="javascript:openStocksDialog();"  alt="Utencilios para preparación de Stocks" />
					<area shape="rect" coords="3220,220,3370,360" href="javascript:openPhDialog();" alt="pH Metro" /> 
					<area shape="rect" coords="830,120,1070,420" href='javascript:document.location.replace("/#/modulo1/1");document.location.reload();' alt="Laboratorio" />				
				</map>
		</div>	
	}
}