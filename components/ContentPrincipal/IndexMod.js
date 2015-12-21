/**
 * Modules Dependencies
 *
 */

import React from 'react';
import Header from './Header';
import Into from './Into';
import $ from 'jquery';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class IndexMod extends React.Component {
    constructor(props){
        super(props);
        this.state = { componente: [], mounted:false };
    }
    getInitialState() {
      return { mounted: false };
    }
    componentDidMount(){
      this.setState({ mounted: true });
    }
    componentWillMount(){
      this.getJson();
    }
    componentDidUpdate(prevProps){
      let oldSrc = prevProps.params.src;
      let newSrc = this.props.params.src;
      if (newSrc !== oldSrc){
              this.getJson();
          }
    }
    componentWillUnmount () {
      // allows us to ignore an inflight request in scenario 4
      this.state = { componente: [] };
    }
    getJson(){
      this.setState({ mounted: false });
      var src = this.props.params.src;
      if(src==2){
        $.get('/dirintomod2', (intomod2) => {
            this.setState({ componente:  intomod2, mounted: true});
        });
      }
      if(src==3){
        $.get('/dirintomod3', (intomod3) => {
            this.setState({ componente:  intomod3, mounted: true});
        });
      }
          if(src==4){
        $.get('/dirintomod4', (intomod4) => {
            this.setState({ componente:  intomod4, mounted: true});
        });
      }
      if(src==5){
        $.get('/dirintomod5', (intomod5) => {
            this.setState({ componente:  intomod5, mounted: true});
        });
      }
    }
    render(){
        if (this.state.componente.length){
            var child = this.state.mounted ?
                 <Into componente={this.state.componente}/> :
                 null;
             return (<div>
                     <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                             {child}
                     </ReactCSSTransitionGroup>
             </div>
             )
        }
        else {
            return <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
        }
    }
}
