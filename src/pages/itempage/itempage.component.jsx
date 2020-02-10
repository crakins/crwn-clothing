import React from 'react';
import { connect } from 'react-redux';

import { selectItemId } from '../../redux/shop/shop.selectors';

import './itempage.styles.scss';

const ItemPage = ({ item }) => {
    const { id } = item
    return (
        <div className='item-page'>
        <h2 className='title'>Item ID: {id}</h2>
    </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    item: selectItemId(ownProps.match.params.itemId)(state)
})

export default connect(mapStateToProps)(ItemPage);