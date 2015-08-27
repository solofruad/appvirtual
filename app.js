/*
* Module dependecies
*/

import React from 'react';
import { default as Router, Route } from 'react-router';
import Inicio from './components/Inicio';
import ContentPrincipal from './components/ContentPrincipal/ContentPrincipal';
import ContentCreditos from './components/ContentCreditos/ContentCreditos';
import Menu from './components/nav/Menu';
import Modulo1Content from './components/modulo1/Modulo1Content';

let RouteHandler = Router.RouteHandler;

let routes = <Route handler={Menu} path='/'>		
		<Route name="Inicio" path="/" handler={ContentPrincipal} />
		<Route name="Creditos" path="creditos" handler={ContentCreditos} />
		<Route name="Modulo1" path="modulo1" handler={Modulo1Content} />		
	</Route>

	Router.run(routes, Router.HashLocation, (Root) =>{
		React.render(<Root />,document.getElementById('container'));
	});

$('#mod1').click(function() {
    setTimeout(()=>{
    	location.reload()
    },3000);
});
                                    
