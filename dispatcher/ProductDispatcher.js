
import { Dispatcher } from 'flux';
let ProductDispatcher = new Dispatcher();
import ProductStore from '../stores/ProductStore.js';


ProductDispatcher.register((payload) => {

  let action = payload.action;
    let item = payload.product;
    switch (action) {

    // Respond to add-item action
    case 'add-item':
    console.log('ProductDispatcher:add-item');
      ProductStore.addToCart(payload.product);
      break;
    // Respond to remove-item action
    case 'remove-item':
    console.log('ProductDispatcher:remove-item'+payload.id);
      ProductStore.removeFromCart(payload.id);
      break;
    default:
      return true;
    }
    ProductStore.emitChange();
    return true;
}
);

export default ProductDispatcher;