/**
 * Modules Dependencies
 * https://github.com/tryolabs/react-examples/tree/master/modal
 */

import React from 'react';
import Header from './Header';
import Into from './Into';
import $ from 'jquery';

export default class IntoMod2 extends React.Component {
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
  }
	render(){
		if (this.state.componente.length){
			return <div>
				<Into componente={this.state.componente}/>
			</div>
		}
		else {
			return <div><img src="public/img/load.gif" /></div>
		}
	}
}
