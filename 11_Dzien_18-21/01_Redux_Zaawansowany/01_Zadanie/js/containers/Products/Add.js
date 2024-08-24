import {connect} from 'react-redux';
import AddProduct from '../../components/Products/Add';
import { addProduct } from '../../redux/actions/products'

const mapDispatchToProps = (dispatch) => ({
    addProduct: payload => dispatch(addProduct(payload)),
})

export default connect(null, mapDispatchToProps)(AddProduct);
