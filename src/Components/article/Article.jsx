import React from 'react';
import './article.css';
function Article({imgUrl,date,title}){
    return(
        <div className="gpt3__bog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="blog image" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read full Article</p>
            </div>
        </div>
    )
}

export default Article