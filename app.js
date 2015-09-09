/*
* Module dependecies
*/

import React from 'react';
import { default as Router, Route } from 'react-router';
import { Redirect } from 'react-router';
import Inicio from './components/Inicio';
import ContentPrincipal from './components/ContentPrincipal/ContentPrincipal';
import ContentCreditos from './components/ContentCreditos/ContentCreditos';
import Menu from './components/nav/Menu';
import Modulo1Content from './components/modulo1/Modulo1Content';
import $ from 'jquery';
import Modulo1 from './components/modulo1/Modulo1';

let RouteHandler = Router.RouteHandler;

let routes = <Route handler={Menu} path='/'>		
		<Route name="Inicio" path="/" handler={ContentPrincipal} />
		<Route name="Creditos" path="creditos" handler={ContentCreditos} />
		<Route name="Modulo1" path="modulo1/:src" handler={Modulo1Content} />		
		<Redirect from="microbiologia" to="Modulo1" params={{src: 2}} />
	</Route>

	Router.run(routes, Router.HashLocation, (Root) =>{
		React.render(<Root />,document.getElementById('container'));
	});


$('.reloadModulo').click(function() {		
    setTimeout(()=>{
    	location.reload()
    },3000);
});
	
$('#relo').click(function() {		
    setTimeout(()=>{
    	location.reload()
    },3000);
});		
                                    
//https://rackt.github.io/react-router/#Redirect