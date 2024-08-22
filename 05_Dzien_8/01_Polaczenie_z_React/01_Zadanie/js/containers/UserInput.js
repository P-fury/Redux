import {connect} from 'react-redux';
import UserInput from '../components/UserInput';
import {addUser} from '../redux/actions';


const mapDispatchToProps = (dispatch) => ({
    onUserAdd: (userId) => dispatch(addUser(userId))
});


export default connect(null, mapDispatchToProps)(UserInput);
