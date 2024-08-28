import {List} from '../components/List';
import {connect} from 'react-redux';
import {deleteTime, saveTime, startCounter, stopCounter} from "../redux/actions";



const mapStateToProps = (state) => ({
    value: state.counter.value,
    isCounting: state.counter.isCounting,
    list: state.list
});

const mapDispatch = (dispatch) => ({
    startCounter: () => dispatch(startCounter()),
    stopCounter: () => dispatch(stopCounter()),
    saveTime: (value)=>dispatch(saveTime(value)),
    deleteTime: (index)=>dispatch(deleteTime(index)),
})

export default connect(mapStateToProps, mapDispatch)(List)
