import {connect} from 'react-redux';
import ProductsDetails from "../../components/ProductsDetails";


const mapStateToProps = (state) => ({
    products: state.products,
})
export default connect(mapStateToProps)(ProductsDetails);