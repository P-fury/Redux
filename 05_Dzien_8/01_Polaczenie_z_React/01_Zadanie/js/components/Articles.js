import React from "react";
import ArticleInput from "./ArticleInput";
import UsersList from "./UsersList";
import ArticlesList from "./ArticlesList";


const Articles = ({onAdd, onDelete, users, articles}) => (
    <div>
        <ArticleInput users={users} onArticleAdd={onAdd}/>
        <UsersList users={users}/>
        <ArticlesList articles={articles} onArticleDelete={onDelete}/>
    </div>
);

export default Articles;
