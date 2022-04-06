import { Component } from "react";

import "./App.css";

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div style={{ "display": "flex", "flexDirection": "column" }}>
            <div>productImage:
                <img src={this.props.productImage}></img>
            </div>
            <div>productId: {this.props.productId}</div>
            <div>productTitle: {this.props.productTitle}</div>
            <div>productPrice: {this.props.productPrice}</div>
            <div>productCategory: {this.props.productCategory}</div>
            <div>productDescription: {this.props.productDescription}</div>

            <br />
        </div>;
    }
}
/* function Product (props) {

    return <div style={{"display": "flex", "flex-direction": "column"}}>
        Funtional Component
      <div>productId: {props.productId}</div>
      <div>productTitle: {props.productTitle}</div>
      <div>productPrice: {props.productPrice}</div>
      <div>productCategory: {props.productCategory}</div>
      <div>productDescription: {props.productDescription}</div>
      <div>productImage: {props.productImage}</div>
      <br/>
    </div>;
} */

const fakeStoreAPIURL = "https://fakestoreapi.com"

const fetchProductsFromAPI = async () => {
    //Get and return all products from API
    const requestOptions = {
        method: "GET"
    }
    const fetchResponse = await fetch(`${fakeStoreAPIURL}/products`, requestOptions)
    console.log("fetch response ", fetchResponse)
    const jsonData = await fetchResponse.json();
    console.log("fetched jsonData ", jsonData)
    return jsonData
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "James",
            products: [
                {
                    id: 1,
                    title: "Shirt",
                    price: "20",
                    category: "Shirts",
                    description: "A really nice shirt.",
                    image: "/img-shirt",
                },
                {
                    id: 30,
                    title: "Pants",
                    price: "30",
                    category: "Pants",
                    description: "A really nice pant.",
                    image: "/img-pant",
                },
            ],
        };
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.products.map((product, idx) => {
                        return (
                            <div>
                                <Product
                                    key={`Product-${idx}`}
                                    productId={product.id}
                                    productTitle={product.title}
                                    productPrice={product.price}
                                    productCategory={product.category}
                                    productDescription={product.description}
                                    productImage={product.image}
                                />
                            </div>
                        )
                    })}
                    <textarea type="text" value={this.state.name} onChange={(event) => {
                        console.log(event.target.value)
                        this.setState({
                            name: event.target.value
                        })
                    }} />
                    <button onClick={async () => {
                        const returnedProducts = await fetchProductsFromAPI()
                        console.log("returnedProducts ", returnedProducts)
                        this.setState({
                            products: returnedProducts
                        })
                    }}>Fetch Products</button>
                </header>
            </div>
        );
    }
}

export default App;