/**
 * Modules Dependencies
 */

import React from 'react';

export default class Boton extends React.Component {
	constructor(props){
		super(props);
	}
	onClick(ev){
		this.props.open.call(null,this.props.modulo)
	}
  render(){
    if(this.props.modulo.length>3){
      return <button	className="boton-info" onClick={this.onClick.bind(this)}>
            Información de la Sala &nbsp;<i className="fa fa-info-circle"></i>
      </button>
    }
    else{
      return <span></span>
    }
  }
}
