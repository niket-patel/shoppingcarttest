import { EventEmitter } from 'events';
import _ from 'lodash';

let ProductStore = _.extend({}, EventEmitter.prototype, {

    products: [{ id: 'LN332', name: 'Isla Bra', price: 29 },
    { id: 'LN336', name: 'Nordic Rose Bra', price: 30 },
    { id: 'FY240', name: 'Zentangle Bra', price: 34 }
    ],


    cartItems: [],

  getProducts: function(){
    return this.products;
  },
  getCartItem: function(){
    return this.cartItems;
  },
  addToCart: function(product){
      console.log('ProductStore:addToCart');
      console.log(product.id);
    this.cartItems.push(product);
  },
  removeFromCart: function(id){
      console.log('ProductStore:removeFromCart'+id);
      
      var index = this.find(id);
    console.log('removeFromCart:index:'+index);
   return this.cartItems.splice(index,1);
  },
  find: function (id) {
   
    var found = undefined;
    this.cartItems.some(function (item, i) {
      if (item.id === id) found = i;
    });
    return found;
  },
    // Emit Change event
    emitChange: function () {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

});

export default ProductStore;