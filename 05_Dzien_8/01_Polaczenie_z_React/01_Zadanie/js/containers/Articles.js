import {connect} from 'react-redux';
import Articles from '../components/Articles';
import {addArticle, deleteArticle} from '../redux/actions';

const mapStateToProps = (state) => ({
    users: state.users,
    articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (newArticle) => dispatch(addArticle(newArticle)),
    onDelete: (articleToDelete) => dispatch(deleteArticle(articleToDelete))

});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
