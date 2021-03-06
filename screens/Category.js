import React from 'react'
import {StyleSheet,View,Text,FlatList} from 'react-native';
import ProductListItem from '../components/ProductListItem'
export default class Category extends React.Component {
    static navigationOptions=({navigation})=>{
        return {
 title: navigation.getParam('title')
        };
    };

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
            "id": 1,
            "images": [
              {
                "url": "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            "name": "Snowboard",
            "price": "5000000",
            "category": 1
          },
          {
            "id": 2,
            "images": [
              {
                "url": "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            "name": "Snowboard",
            "price": "5000000",
            "category": 1
          },
          {
            "id": 3,
            "images": [
              {
                "url": "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            "name": "Snowboard2",
            "price": "5000000",
            "category": 2
          },
          {
            "id": 4,
            "images": [
              {
                "url": "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            "name": "Snowboard2",
            "price": "5000000",
            "category": 2
          }


      ]
    };
  }
   componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    try {
      const arr = this.state.products.filter((animal) => {
            return animal.category === id
         });
         
      this.setState({
        products: [...arr]
      });
    } catch (error) {
      console.log(error);
    }
  }


    render() {
        return (
            <FlatList
            data={this.state.products}
            contentContainerStyle={styles.container}
            numColumns={2}
            renderItem={({ item }) =>
              <View style={styles.wrapper}>
                <ProductListItem product={item} 
                  
                />
              </View>
            }
            keyExtractor={(item) => `${item.id}`} />
        );
    }
}
const styles = StyleSheet.create({
    container: {
 paddingHorizontal:8,
 paddingTop:16
    },
    wrapper:{
        flex:1,
        paddingHorizontal:8
    }
  });
