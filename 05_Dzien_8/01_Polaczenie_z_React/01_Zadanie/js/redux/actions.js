const ADD_ARTICLE = 'ADD_ARTICLE';
const ADD_USER = 'ADD_USER';
const DELETE_ARTICLE = 'DELETE_ARTICLE';

function addArticle({userId, title}) {
    return {
        type: ADD_ARTICLE,
        payload: {
            userId,
            title,
        }
    }
}

function addUser(userId) {
    return {
        type: ADD_USER,
        payload: {
            userId
        }
    }
}


function deleteArticle({userId, title}){
    return{
        type: DELETE_ARTICLE,
        payload:{
            userId,
            title
        }
    }
}


export {ADD_ARTICLE, ADD_USER,DELETE_ARTICLE, addArticle, addUser, deleteArticle};

