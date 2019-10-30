import React, { Component } from 'react'
import CartItem from "./CartItem";
import { StyleSheet,FlatList} from 'react-native';

export default class CartList extends Component {
    render() {
    const { value } = this.props;
    const { cart } = this.props.value;
        return (
            <FlatList
            data={cart}
            renderItem={({item})=> (<CartItem
        cartItem={item}/>)}
            keyExtractor={item=>`${item.id}`}
            contentContainerStyle={styles.container}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
      paddingTop:16,
      paddingLeft : 16,
      paddingRight: 16
    },
  });
