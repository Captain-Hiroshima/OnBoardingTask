import React, { Component } from "react";
import axios from "axios";
import { Button, Loader } from "semantic-ui-react";
import ProductTable from "./ProductTable";
import ProductModalCreate from "./ProductModalCreate";

export default class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      open: false,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    axios
      .get("/Products/GetProduct")
      .then(({ data }) => {
        this.setState({
          product: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openCreateModal = (value) => {
    this.setState({
      open: value,
    });
  };

  render() {
    const { product, open } = this.state;
    if (product) {
      return (
        <div>
          <h1>Product Home</h1>
          <Button color="blue" onClick={() => this.openCreateModal(true)}>
            Create Product
          </Button>
          <ProductModalCreate
            open={open}
            openCreateModal={this.openCreateModal}
            fetchProduct={this.fetchProduct}
          />
          <ProductTable product={product} refresh={this.fetchProduct} />

          <p></p>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <Loader />
        </div>
      );
    }
  }
}
