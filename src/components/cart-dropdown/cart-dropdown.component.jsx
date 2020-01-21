import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartsItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? ( 
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )
      }
    </div>
      {
        cartItems.length ? (
          <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        ) : (
          <span></span>
        )
      }

    
  </div>
);

const mapStateToProps = createStructuredSelector({
  // using selectors
  cartItems: selectCartsItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));