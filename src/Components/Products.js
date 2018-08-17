import React, {Component} from 'react';
import Checkout from '.././Checkout';

const productsArr = [
  {
    name: 'Nike Air Huarache Ultra',
    price: 40,
    image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/x7seiwt2qttpzu50p72o/air-huarache-ultra-mens-shoe-PATLzDAo.jpg'
  },{
    name: 'Nike Air Max 97',
    price: 45,
    image: 'https://images.nike.com/is/image/DotCom/PDP_HERO_M/918890_001_A_PREM/air-max-97-older-shoe.jpg'
  },{
    name: 'Nike Air Huarache Ultra',
    price: 52,
    image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gknnhy1nmwwbp7t6aeil/air-huarache-ultra-shoe-3STdvC.jpg'
  },{
    name: 'Nike Air Huarache Ultra',
    price: 49,
    image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/x7seiwt2qttpzu50p72o/air-huarache-ultra-mens-shoe-PATLzDAo.jpg'
  },{
    name: 'Nike Air Max 97',
    price: 54,
    image: 'https://images.nike.com/is/image/DotCom/PDP_HERO_M/918890_001_A_PREM/air-max-97-older-shoe.jpg'
  }
];

export default class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/x7seiwt2qttpzu50p72o/air-huarache-ultra-mens-shoe-PATLzDAo.jpg',
      name: 'Nike Air Huarache Ultra',
      price: 40
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      image: e.target.src,
      name: e.target.alt,
      price: e.target.parentNode.parentNode.childNodes[2].innerHTML.replace('£','')
    });
    console.log(e.target.parentNode.parentNode.childNodes[2].innerHTML.replace('£',''));
  }

  render(){

    const productList = productsArr.map((product, index) =>
      <li key={index}>
        <ul className="productTile">
          <li className="productImage" onClick={this.handleClick}>
            <img src={product.image} alt={product.name} width="300" />
          </li>
          <li>
            <h3>{product.name}</h3>
          </li>
          <li>
            £{product.price}
          </li>
        </ul>
      </li>
    );

    return (
      <div className="main-container">
        <ul className="productList-container" >
        <div>
          {productList}
        </div>
        </ul>
        <ul className="productContainer">
          <div>
            <img src={this.state.image} width="400" alt={this.state.name}/>
            <h3>{this.state.name} - £{this.state.price}</h3>
            <Checkout
               name={this.state.name}
               description={this.state.name}
               amount={this.state.price}
             />
          </div>
        </ul>
      </div>
    )
  }
}
