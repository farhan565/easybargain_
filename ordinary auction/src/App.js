import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './Components/ProductCard/ProductCard';
import axios from "axios";
import Welcome from './Components/Welcome/Welcome';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {


  constructor() {
    super()
    this.state = {
      products: [],
      dataLoaded: false,
      user: "",
      nameSubmitted: false,

    }
  }

  componentWillMount() {
    axios.get("http://localhost:4002/product/viewproduct").then((data) => {
      this.setState({ products: data.data })
      this.setState({ dataLoaded: true })
    })
  }



  render() {



    if (this.state.dataLoaded) {

      const Products = this.state.products.map((prod) =>
        <ProductCard title={prod.name} price={prod.price} description={prod.description}  username={this.state.user}/>
      )

      return (
        <>
          <div className="HomePageContainer">
          <Header />
            {/* <Welcome/>  */}

            <div className="Welcome">

              {!this.state.nameSubmitted &&
                <div>
                  <input placeholder="Enter Name here" className="Welcome_inp" onChange={(e) => { this.setState({ user: e.target.value }) }} />
                  <button className="Welcome_inp" onClick={() => { this.setState({ nameSubmitted: true }) }} >Submit</button>
                </div>
              }


              {this.state.nameSubmitted &&
<div>
              <h4> Hey {this.state.user}! Welcome to Easy Bargain</h4>
              <h6>Our featured products are here </h6> 
                </div>
              }

            </div>






            <div className="ProductList">
              {Products}

            </div>
            <Footer />
          </div>
        </>
      );

    }

    else {
      return <h1>Fetching Data</h1>
    }
  }

}