import React, {Component} from "react";

import "../css/styles.css"

class Header extends Component{


	render(){
		return(
			<header>
				<div className="logo"> Logo</div>
				<input type="text" onChange={this.props.keywords}/> 
				
			</header>
		)

	}
}

export default Header;