/*
* Module dependecies
*/

import React from 'react';
import { default as Router, Route } from 'react-router';
import { Redirect } from 'react-router';
import Inicio from './components/Inicio';
import ContentPrincipal from './components/ContentPrincipal/ContentPrincipal';
import Modulo2 from './components/ContentPrincipal/Modulo2';
import Modulo3 from './components/ContentPrincipal/Modulo3';
import Modulo4 from './components/ContentPrincipal/Modulo4';
import Modulo5 from './components/ContentPrincipal/Modulo5';
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
		<Route name="Modulo2" path="modulo2" handler={Modulo2} />
		<Route name="Modulo3" path="modulo3" handler={Modulo3} />
		<Route name="Modulo4" path="modulo4" handler={Modulo4} />
		<Route name="Modulo5" path="modulo5" handler={Modulo5} />
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
