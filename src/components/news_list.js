import React from 'react';

import NewsItem from "./news_list_detail";

const NewsList = (props)=>{

	const items = props.news.map((item)=>{
        return (
            <NewsItem item={item} key={item.id}/>
        )
	})
	return (
		<div> 
			{props.children} 
			{items} 
		</div>
	)
}

export default NewsList;