/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import ModulosUnit from './ModulosUnit';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Modulos extends React.Component {
    constructor(props){
        super(props);
        this.state = { mounted:false };
    }
    componentWillMount(){
        this.setState({ mounted: true });
    }
    render(){
        var child = this.state.mounted ?
        <Row id="contentPrincipal" className="contentPrincipal">
            {
            this.props.modulos.map((content) => {
                return <ModulosUnit
                    key={content.modulo}
                    modulo={content.modulo}
                    titulo={content.titulo}
                    descripcion={content.descripcion}
                    url={content.url}
                    open={this.props.open}/>
            })
            }
        </Row> :
            null;
        return (<Grid>
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                {child}
            </ReactCSSTransitionGroup>
        </Grid>)
    }
}
