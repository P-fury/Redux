import {connect} from 'react-redux';
import RecipeDetails from "../../components/RecipeDetails";


const mapStateToProps = (state) => ({
    recipes: state.recipes,
    products: state.products,
})
export default connect(mapStateToProps)(RecipeDetails);