import React from 'react';
import { connect } from 'react-redux';
import Favourites from '../components/Favourites';

const mapState = (state)=>({
    quotes: state.favorite,
})

export default connect(mapState)(Favourites);