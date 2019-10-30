let appState={
    cart:[],
    products:[
        {
            id: 1,
            images: [
              {
                url:
                  "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            name: "Snowboard",
            price: "5000000",
            category: 1
          },
          {
            id: 2,
            images: [
              {
                url:
                  "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            name: "Snowboard",
            price: "5000000",
            category: 1
          },
          {
            id: 3,
            images: [
              {
                url:
                  "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            name: "Snowboard2",
            price: "5000000",
            category: 2
          },
          {
            id: 4,
            images: [
              {
                url:
                  "https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png"
              }
            ],
            name: "Snowboard2",
            price: "5000000",
            category: 2
          }
    ]
}
const cartReducer =(state=appState,action)=>{
    let newProduct=state.cart;
    switch(action.type){
        case 'ADD' :
            let tempProducts=[...appState.products];
            const newSP = appState.products.find(item=>item.id===action.value);
            const index = tempProducts.indexOf(newSP);
            const product = tempProducts[index];
            product.inCart = true;
            return {...state,cart:[...newProduct,product]};
    }
    return state;

    
}
export default cartReducer;