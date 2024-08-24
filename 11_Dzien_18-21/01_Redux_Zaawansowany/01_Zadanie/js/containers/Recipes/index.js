import {connect} from 'react-redux';
import AllRecipes from "../../components/Recipes";


const mapStateToProps = (state) => ({
    recipes: state.recipes,
})
export default connect(mapStateToProps)(AllRecipes);