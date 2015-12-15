/**
 * Modules Dependencies
 * https://github.com/tryolabs/react-examples/tree/master/modal
 */

import React from 'react';
import Header from './Header';
import Into from './Into';
import $ from 'jquery';

export default class IndexMod extends React.Component {
	constructor(props){
		super(props);
		this.state = { componente: [] };
	}
	componentWillMount(){
    this.getJson();
	}
  componentDidUpdate(prevProps){
    let oldSrc = prevProps.params.src;
    let newSrc = this.props.params.src;
    if (newSrc !== oldSrc)
      this.getJson();
  }
  componentWillUnmount () {
    // allows us to ignore an inflight request in scenario 4
    this.state = { componente: [] };
  }
  getJson(){
    var src = this.props.params.src;
    if(src==2){
      $.get('/dirintomod2', (intomod2) => {
          this.setState({ componente:  intomod2});
      });
    }
    if(src==3){
      $.get('/dirintomod3', (intomod3) => {
          this.setState({ componente:  intomod3});
      });
    }
		if(src==4){
      $.get('/dirintomod4', (intomod4) => {
          this.setState({ componente:  intomod4});
      });
    }
    if(src==5){
      $.get('/dirintomod5', (intomod5) => {
          this.setState({ componente:  intomod5});
      });
    }
  }
	render(){
		if (this.state.componente.length){
			return <div>
				<Into componente={this.state.componente}/>
			</div>
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
