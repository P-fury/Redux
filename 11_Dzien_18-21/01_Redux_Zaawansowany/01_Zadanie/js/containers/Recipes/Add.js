import {connect} from 'react-redux';
import AddRecipe from '../../components/Recipes/Add';
import { addRecipes } from '../../redux/actions/recipes'


const mapStateToProps = (state) => ({
    products: state.products,
})


const mapDispatchToProps = (dispatch) => ({
    addRecipes: payload => dispatch(addRecipes(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
