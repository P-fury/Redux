import {connect} from 'react-redux';
import Home from '../../components/Home'
import {lastProducts} from "../../redux/selectors/lastProducts";
import products from "../../components/Products";

const mapStateToProps = (state) => ({
    products: lastProducts(state.products),


})
export default connect(mapStateToProps)(Home);