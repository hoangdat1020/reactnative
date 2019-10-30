import React from 'react';
import { StyleSheet,FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem'
import axios from 'axios';

export default class Categories extends React.Component{
    static navigationOptions={
        title: 'Home'
    };
 
 
    constructor(props){
    super(props);
    this.state={
      categories:[
        {
          "id": 1,
          "name": "Dụng cụ trượt tuyết"
        },
        {
          "id": 2,
          "name": "Quần áo trượt tuyết"
        },
        {
          "id": 3,
          "name": "Kính mũ"
        }
      ]
    };
  }

  render(){
      const {navigation} = this.props;//chuyen doi sang Screen
    const {categories} =this.state;
  return (

   
      <FlatList
      data={categories}
      renderItem={({item})=> (<CategoryListItem 
      onPress={()=>navigation.navigate('Category',{
          title: item.name,
          id:item.id
      })}
  category={item}/>)}
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
