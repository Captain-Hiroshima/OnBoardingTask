import React, { Component } from "react";
import axios from "axios";
import { Button, Loader } from "semantic-ui-react";
import StoreTable from "./StoreTable";
import StoreModalCreate from "./StoreModalCreate";

export default class StoreHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: [],
      open: false,
    };
  }

  componentDidMount() {
    this.fetchStore();
  }

  fetchStore = () => {
    axios
      .get("/Stores/GetStore")
      .then(({ data }) => {
        this.setState({
          store: data,
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
    const { store, open } = this.state;
    if (store) {
      return (
        <div>
          <h1>Store Home</h1>
          <Button color="blue" onClick={() => this.openCreateModal(true)}>
            Create Store
          </Button>
          <StoreModalCreate
            open={open}
            openCreateModal={this.openCreateModal}
            fetchStore={this.fetchStore}
          />
          <StoreTable store={store} refresh={this.fetchStore} />

          <p></p>
        </div>
      );
    } else {
      return (
        <div>
          <Loader />
        </div>
      );
    }
  }
}
