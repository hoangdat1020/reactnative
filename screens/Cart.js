import React, { Component } from 'react';
import { Text } from 'react-native';
import CartList from '../components/CartList';
import CartTotals from "../components/CartTotals";
import { ProductConsumer } from "../context";


export default class CartScreen extends Component {
  static navigationOptions = {
    title: 'Cart'
  };

  render() {

    return (
      <ProductConsumer>
      {value => {
        const { cart } = value;
        if (cart.length > 0) {
          return (
            <React.Fragment>
              <CartList value={value} />
              <CartTotals value={value} />
            </React.Fragment>
          );
        } 
      }}
    </ProductConsumer>
  );
  }
}