
/**
 * Modules Dependencies
 */

import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import IntoUnit from './IntoUnit';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Into extends React.Component {
    constructor(props){
        super(props);
        this.state = { mounted:false };
    }
    componentWillMount(){
        this.setState({ mounted: true });
    }
    render(){
        var child = this.state.mounted ?
        <Row className="contentPrincipal">
            {
            this.props.componente.map((content) => {
                return <IntoUnit
                    key={content.id}
                    id={content.id}
                    modulo={content.modulo}
                    titulo={content.titulo}
                    descripcion={content.descripcion}
                    url={content.url}/>
            })
            }
        </Row> :
            null;
        return  (<Grid>
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                {child}
            </ReactCSSTransitionGroup>
        </Grid>)
    }
}
