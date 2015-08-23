/*
* Module dependecies
*/

import React from 'react';
import { default as Router, Route } from 'react-router';
import Menu from './components/nav/Menu';
import ContentPrincipal from './components/ContentPrincipal/ContentPrincipal';
import Creditos from './components/ContentPrincipal/Creditos';

let RouteHandler = Router.RouteHandler;

let routes = <Route handler={Menu}>
		<Route name="Inicio" path="inicio" handler={ContentPrincipal} />
		<Route name="Creditos" path="creditos" handler={Creditos} />
	</Route>

	Router.run(routes, Router.HashLocation, (Root) =>{
		React.render(<Root />,document.getElementById('container'));
	});
                                    