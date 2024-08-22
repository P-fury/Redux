import React from "react";



const ArticlesList = ({articles = [], onArticleDelete}) => (
  <ol>
    {articles.map((article) => <li key={article.title}>{article.title}<button onClick={()=>onArticleDelete(article)}>delete</button></li>)}
  </ol>
);

export default ArticlesList;
