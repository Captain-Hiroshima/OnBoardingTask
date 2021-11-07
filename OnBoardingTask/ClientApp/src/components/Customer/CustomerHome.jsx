import React, { Component } from "react";
import axios from "axios";
import { Button, Loader } from "semantic-ui-react";
import CustomerTable from "./CustomerTable";
import CustomerModalCreate from "./CustomerModalCreate";

export default class CustomerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      open: false,
    };
  }

  componentDidMount() {
    this.fetchCustomer();
  }

  fetchCustomer = () => {
    axios
      .get("/Customers/GetCustomer")
      .then(({ data }) => {
        this.setState({
          customer: data,
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
    const { customer, open } = this.state;
    if (customer) {
      return (
        <div>
          <h1>Customer Home</h1>
          <Button color="blue" onClick={() => this.openCreateModal(true)}>
            Create Customer
          </Button>
          <CustomerModalCreate
            open={open}
            openCreateModal={this.openCreateModal}
            fetchCustomer={this.fetchCustomer}
          />
          <CustomerTable customer={customer} refresh={this.fetchCustomer} />

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
