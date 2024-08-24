import { connect } from 'react-redux';
import Home from '../../components/Home';
import { lastProducts } from "../../redux/selectors/lastProducts";
import { lastRecipes } from "../../redux/selectors/lastRecipes";

// Combine the state mapping in a single function
const mapStateToProps = (state) => ({
    products: lastProducts(state.products),  // Get the last products
    recipes: lastRecipes(state.recipes),     // Get the last recipes
});

export default connect(mapStateToProps)(Home);