import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {setCounterValue, startCounter, stopCounter} from "../redux/actions";



const mapStateToProps = (state, ownProps) => ({
    value: state.counter.value,
    isCounting: state.counter.isCounting
});

const mapDispatch = (dispatch) => ({
    startCounter: () => dispatch(startCounter()),
    stopCounter: () => dispatch(stopCounter()),
    onSet: (payload) => dispatch(setCounterValue(payload))
})

export default connect(mapStateToProps, mapDispatch)(Counter)
