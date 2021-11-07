import React, { Component } from "react";
import axios from "axios";
import { Button, Loader } from "semantic-ui-react";
import SalesTable from "./SalesTable";
import SalesModalCreate from "./SalesModalCreate";

export default class SalesHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      customers: [],
      products: [],
      stores: [],
      open: false,
    };
  }

  componentDidMount() {
    this.fetchSales();
    this.fetchProduct();
    this.fetchCustomers();
    this.fetchStore();
  }

  fetchSales = () => {
    axios
      .get("/Sales/GetSales")
      .then(({ data }) => {
        this.setState({
          sales: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchCustomers = () => {
    axios
      .get("/Customers/GetCustomer")
      .then(({ data }) => {
        this.setState({
          customers: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchProduct = () => {
    axios
      .get("/Products/GetProduct")
      .then(({ data }) => {
        this.setState({
          products: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchStore = () => {
    axios
      .get("/Stores/GetStore")
      .then(({ data }) => {
        this.setState({
          stores: data,
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
    const { sales, customers, stores, products, open } = this.state;
    if (sales) {
      return (
        <div>
          <h1>Sales Home</h1>
          <Button color="blue" onClick={() => this.openCreateModal(true)}>
            Create A Sale
          </Button>
          <SalesModalCreate
            refresh={this.fetchSales}
            open={open}
            customers={customers}
            products={products}
            stores={stores}
            openCreateModal={this.openCreateModal}
            fetchSales={this.fetchSales}
          />
          <SalesTable
            sales={sales}
            refresh={this.fetchSales}
            customers={customers}
            products={products}
            stores={stores}
          />

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
