import React, {Component} from 'react';
import Checkout from '.././Checkout';

const productsArr = [
  {
    name: 'Nike Air Huarache Ultra',
    price: 12,
    image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/x7seiwt2qttpzu50p72o/air-huarache-ultra-mens-shoe-PATLzDAo.jpg'
  },{
    name: 'Nike Air Max 97',
    price: 13,
    image: 'https://images.nike.com/is/image/DotCom/PDP_HERO_M/918890_001_A_PREM/air-max-97-older-shoe.jpg'
  },{
    name: 'Nike Air Huarache Ultra',
    price: 14,
    image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gknnhy1nmwwbp7t6aeil/air-huarache-ultra-shoe-3STdvC.jpg'
  },{
    name: 'Nike Air Huarache Ultra',
    price: 15,
    image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/x7seiwt2qttpzu50p72o/air-huarache-ultra-mens-shoe-PATLzDAo.jpg'
  },{
    name: 'Nike Air Max 97',
    price: 16,
    image: 'https://images.nike.com/is/image/DotCom/PDP_HERO_M/918890_001_A_PREM/air-max-97-older-shoe.jpg'
  }
];


const productList = productsArr.map((product, index) =>
  <li key={index}>
    <ul className="productTile">
      <li className="productImage">
        <img src={product.image} alt={product.name} width="300" />
      </li>
      <li>
        <h3>{product.name}</h3>
      </li>
      <li>£{product.price}</li>
    </ul>
  </li>
);

export default class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/x7seiwt2qttpzu50p72o/air-huarache-ultra-mens-shoe-PATLzDAo.jpg',
      name: 'Nike Air Huarache Ultra',
      price: 12
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      value: e.target.src,
      name: e.target.alt
    });
    console.log(e.target.price);
  }

  render(){
    return (
      <div className="main-container">
        <ul className="productList-container" >
        <div onClick={this.handleClick}>{productList}</div>
        </ul>
        <ul className="productContainer">
          <div>
            <img src={this.state.value} width="400"/>
            <h3>{this.state.name}</h3>
            <Checkout
               name={this.state.name}
               description={'Only the Book'}
               amount={1}
             />
          </div>
        </ul>
      </div>
    )
  }
}
