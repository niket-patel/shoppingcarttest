import React from 'react';
import ProductStore from '../stores/ProductStore.js';
import ProductDispatcher from '../dispatcher/ProductDispatcher.js';

class ProductActionClass extends React.Component {

    constructor(props) {
        super(props);
    }

    addProduct(dataset) {
       console.log('ProductAction:addToCart');
        ProductDispatcher.dispatch({
            action: 'add-item',
            product: dataset
        });
    }
        removeProduct(id) {
       console.log('ProductAction:removeFromCart');
        ProductDispatcher.dispatch({
            action: 'remove-item',
            id: id
        });
    }
}

const ProductAction = new ProductActionClass();
export default ProductAction;