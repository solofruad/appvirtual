/*
* Module dependecies
*/

import React from 'react';
import Menu from './components/nav/Menu';
import ContentPrincipal from './components/ContentPrincipal/ContentPrincipal';

                                    
React.render(
            <Menu />,
            document.getElementById('nav-container') 
            );

React.render(
            <ContentPrincipal />,
            document.getElementById('container') 
            );