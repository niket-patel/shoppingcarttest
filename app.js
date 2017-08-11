import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList.js';


class AppRoot extends React.Component{
  render(){
    return(
      <div>
        <ProductList />
        </div>
    );
  }
}

ReactDOM.render(<AppRoot />,
  document.getElementById('app-root')
);