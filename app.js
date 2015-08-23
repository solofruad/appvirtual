/*
* Module dependecies
*/

import React from 'react';
import { default as Router, Route } from 'react-router';
import Inicio from './components/Inicio';
import ContentPrincipal from './components/ContentPrincipal/ContentPrincipal';
import ContentCreditos from './components/ContentCreditos/ContentCreditos';
import Menu from './components/nav/Menu';
import Modulo2 from './components/ContentPrincipal/Modulo2';

let RouteHandler = Router.RouteHandler;

let routes = <Route handler={Menu} path='/'>		
		<Route name="Inicio" path="/" handler={ContentPrincipal} />
		<Route name="Creditos" path="creditos" handler={ContentCreditos} />
		<Route name="Modulo2" path="modulo2" handler={Modulo2} />
	</Route>

	Router.run(routes, Router.HashLocation, (Root) =>{
		React.render(<Root />,document.getElementById('container'));
	});
                                    
