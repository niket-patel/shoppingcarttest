import React from 'react';
import ProductStore from '../stores/ProductStore.js';
import ProductDispatcher from '../dispatcher/ProductDispatcher.js';
import ProductAction from '../actions/ProductAction.js';
import Product from './Product.js';

export default class ProductList extends React.Component{
    constructor(){
        super();
        this.state = {
            products : ProductStore.getProducts(),
            cartItems : ProductStore.getCartItem()
        }
        this.renderProduct = this.renderProduct.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderCart = this.renderCart.bind(this);
        this.renderCartItem = this.renderCartItem.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

// Method to setState based upon Store changes
  _onChange() {
    this.setState(getListState());
    this.setState(getCartState());
  }
  // Add change listeners to stores
  componentDidMount() {
    ProductStore.addChangeListener(this._onChange.bind(this));
  }
  // Remove change listeners from stores
  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange.bind(this));
  }
addToCart(event){
    let data = event.target.dataset;
    let product ={
        id:data.id,
        name:data.name,
        price:data.price
    }
    console.log('ProductList:addToCart');
    console.log(product.name);
    event.preventDefault();
    ProductAction.addProduct(product);
}
removeFromCart(event){
        console.log('ProductList:removeFromCart');
    console.log(event.target.dataset.id);
    event.preventDefault();
    ProductAction.removeProduct(event.target.dataset.id);
}

renderProduct(product,i){

        return <Product index={i} value={product} click={this.addToCart} class="glyphicon glyphicon-plus" />
}
renderCartItem(product,i){

        return <Product index={i} value={product} click={this.removeFromCart} class="glyphicon glyphicon-minus" />
}

  renderForm() {

    
    let itemHtml = this.state.products.map((product,i) => {
        return this.renderProduct(product,i);

    });

    return itemHtml;
  }


renderCart(){
    
    let cartHtml = this.state.cartItems.map((product,i) => {
        return this.renderCartItem(product,i);

    });

    return cartHtml;
  }

  render() {
    let itemHtml = this.renderForm();
    let cartHtml = this.renderCart();
    return <div >
        <h4>List of Products</h4>
        <ul>
        {itemHtml}
      </ul>
      <h4>Cart Details</h4>
        <ul>
            {cartHtml}
            </ul>
    </div>;
  }
}

 // Method to retrieve state from Stores
let getListState = () => {
  return {
    products: ProductStore.getProducts()
  };
} 
let getCartState = () => {
    return {
        cartItems : ProductStore.getCartItem()
    };
}