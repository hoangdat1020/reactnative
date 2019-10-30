import React, { Component } from "react";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    cartTotal: 0
  };
  setProducts() {
    let tempProducts = [];
    tempProducts = [
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
    ];
    this.setState(() => {
      return { products: tempProducts };
    });
  }
  componentDidMount() {
    this.setProducts();
  }

  increment = id => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(product);
    const selectProduct = tempCart[index];
    selectProduct.count = selectProduct.count + 1;
    selectProduct.total = selectProduct.count * selectProduct.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(product);
    const selectProduct = tempCart[index];
    selectProduct.count = selectProduct.count - 1;
    if (selectProduct.count === 0) {
      this.removeItem(id);
    } else {
      selectProduct.total = selectProduct.count * selectProduct.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = id => {
    let product = this.getItem(id);
    product.inCart = false;
    product.count = 0;
    product.total = 0;

    let tempProducts = this.state.cart.filter(item => {
      return item.id !== id;
    });
    this.setState(
      () => {
        return { cart: tempProducts };
      },
      () => {
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    // const tempTax=subTotal*0.1;
    // const tax= parseFloat(tempTax.toFixed(2));
    // const total = subTotal +tax;
    this.setState(() => {
      return {
        // cartSubTotal:subTotal,
        // cartTax:tax,
        cartTotal: subTotal
      };
    });
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  addToCart = id => {
    let temProducts = [...this.state.products];
    const index = temProducts.indexOf(this.getItem(id));
    const product = temProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: temProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,

          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
