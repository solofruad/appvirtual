/*
* Module dependecies
*/

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import ContentPrincipal from './components/ContentPrincipal/ContentPrincipal';
import Menu from './components/nav/Menu';
import Modulo1Content from './components/modulo1/Modulo1Content';
import IndexMod from './components/ContentPrincipal/IndexMod';
import Modulo2 from './components/ContentPrincipal/Modulo2';
import Modulo3 from './components/ContentPrincipal/Modulo3';
import Modulo4 from './components/ContentPrincipal/Modulo4';
import Modulo5 from './components/ContentPrincipal/Modulo5';
import Modulo6 from './components/ContentPrincipal/Modulo6';
import Modulo7 from './components/ContentPrincipal/Modulo7';
import ContentCreditos from './components/ContentCreditos/ContentCreditos';
import ContentSimulaciones from './components/ContentSimulaciones/ContentSimulaciones';

let RouteHandler = Router.RouteHandler;

let history = createHashHistory({
	queryKey: false
});

let routes = <Route component={Menu} path='/'>
		<IndexRoute component={ContentPrincipal} />
		<Route path="creditos" component={ContentCreditos} />
		<Route path="simulaciones" component={ContentSimulaciones} />
		<Route path="contentPrincipal" component={ContentPrincipal} />
		<Route path="modulo1/:src" component={Modulo1Content} />
		<Route path="modulo/:src" component={IndexMod} />
		<Route path="modulo2" component={Modulo2} />
		<Route path="modulo3" component={Modulo3} />
		<Route path="modulo4" component={Modulo4} />
		<Route path="modulo5" component={Modulo5} />
		<Route path="modulo6" component={Modulo6} />
		<Route path="modulo7" component={Modulo7} />
	</Route>

render(<Router history={history}>{routes}</Router>, document.getElementById('container'));
