import React from "react";
import ReactDOM from "react-dom";

import JSON from "./db.json";

//components
import Header from "./components/header";
import NewsList from "./components/news_list";


class App extends React.Component{

	state = {
		news : JSON
    }
    
    getKeyword = (e)=>{
        let keyword = e.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1;
        })
        console.log(filtered);
    }

	render(){
		return (
		<div>
			<Header keywords = {this.getKeyword}/>
			<NewsList news={this.state.news}>
				<h3> The News are :</h3>
			</NewsList>
		</div>
	)
}
	
}

ReactDOM.render(<App />, document.getElementById("root"));
//Behind The Scenes
// React.createElement("h1", null)
// React.createElement("h1", {className : "title"}, "Hello World")