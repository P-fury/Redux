export const userArticlesSelector = (state, user) => {
    if(!user){
        return state.articles
    }
    return state.articles.filter(article => article.userId === user)
}