import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout.jsx";
import CustomerHome from "./components/Customer/CustomerHome.jsx";
import ProductHome from "./components/Product/ProductHome.jsx";
import StoreHome from "./components/Store/StoreHome.jsx";
import SalesHome from "./components/Sales/SalesHome.jsx";

import "./custom.css";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={CustomerHome} />
        <Route path="/customer" component={CustomerHome} />
        <Route path="/product" component={ProductHome} />
        <Route path="/store" component={StoreHome} />
        <Route path="/sales" component={SalesHome} />
      </Layout>
    );
  }
}
