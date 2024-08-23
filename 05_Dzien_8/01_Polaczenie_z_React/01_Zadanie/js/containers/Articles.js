import {connect} from 'react-redux';
import Articles from '../components/Articles';
import {addArticle, deleteArticle} from '../redux/actions';
import { userArticlesSelector } from '../redux/selectors';


const mapStateToProps = (state, ownProps) => ({
    users: state.users,
    articles: userArticlesSelector(state, ownProps.user)
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (newArticle) => dispatch(addArticle(newArticle)),
    onDelete: (articleToDelete) => dispatch(deleteArticle(articleToDelete))

});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
