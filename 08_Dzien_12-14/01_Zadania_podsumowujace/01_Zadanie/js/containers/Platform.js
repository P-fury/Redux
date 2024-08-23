import React from "react";
import Platform from "../components/Platform";
import {connect} from "react-redux";
import {startCountdown} from "../redux/actions";



const mapStateToProps = (state) => ({
    launched : state.launchReducer.launched,
    counter: state.launchReducer.counter
})

const mapDispatchToProps = (dispatch) => ({
    deploy: ()=>dispatch(startCountdown())
})


export default connect(mapStateToProps, mapDispatchToProps)(Platform);