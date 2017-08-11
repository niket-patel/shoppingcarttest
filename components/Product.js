import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{
    constructor(props){
      super(props);      
    }
  render(){
    console.log(this.props.value.name);
    return(
        <li key={this.props.index}> 
        <span style={styles.product}>{this.props.value.id}</span>
        <span style={styles.product}>{this.props.value.name}</span>
        <span style={styles.product}>{this.props.value.price}</span>
        <span style={styles.product} className={this.props.class} onClick={this.props.click} data-id={this.props.value.id}
        data-name={this.props.value.name} data-price={this.props.value.price}
         />
        </li> 
    );
  }   
}

let styles = {   
  product: {
    float: "left",
    paddingLeft: 10,
    fontSize: 12
  }
};




export default Product;
