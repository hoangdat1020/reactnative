import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Button,
    Text,
    TouchableOpacity,
    FlatList,
    View
  } from 'react-native';
  
  import { connect } from 'react-redux';
  import CartList from '../components/CartList';
  import addToCart from '../actions/addCart';
  class CartContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {addToCart} = this.props;
        return(
            <CartList   />

        );
    }


  }
