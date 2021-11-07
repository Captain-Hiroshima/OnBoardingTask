import React, { useState } from "react";
import { Button, Modal, Form, Select, Input } from "semantic-ui-react";
import axios from "axios";

function SalesModalCreate(props) {
  const { refresh, open, openCreateModal, products, customers, stores } = props;

  const [productsID, setProduct] = useState();
  const [customersID, setCustomer] = useState();
  const [storesID, setStore] = useState();
  const [dateSold, setDateSold] = useState();

  const customerArray = customers.map((c) => {
    return { key: c.id, value: c.id, text: c.name };
  });

  const productArray = products.map((p) => {
    return { key: p.id, value: p.id, text: p.name };
  });

  const storeArray = stores.map((s) => {
    return { key: s.id, value: s.id, text: s.name };
  });

  const createSale = () => {
    axios
      .post("Sales/PostSales", {
        productId: productsID,
        customerId: customersID,
        storeId: storesID,
        dateSold: dateSold,
      })
      .then((res) => {
        openCreateModal(false);
        setProduct();
        setCustomer();
        setStore();
        refresh();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSelectChangeProduct = (event, { value }) => {
    setProduct(value);
  };

  const handleSelectChangeCustomer = (event, { value }) => {
    setCustomer(value);
  };

  const handleSelectChangeStore = (event, { value }) => {
    setStore(value);
  };

  return (
    <Modal open={open}>
      <Modal.Header>Create New Sale</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Select Date</label>
              <Input
                placeholder="FORMAT: YEAR/MONTH/DAY"
                onChange={(e) => setDateSold(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Product</label>
              <Select
                placeholder="Product"
                options={productArray}
                onChange={handleSelectChangeProduct}
              />
            </Form.Field>
            <Form.Field>
              <label>Customer</label>
              <Select
                placeholder="Customer"
                options={customerArray}
                onChange={handleSelectChangeCustomer}
              />
            </Form.Field>
            <Form.Field>
              <label>Store</label>
              <Select
                placeholder="Store"
                options={storeArray}
                onChange={handleSelectChangeStore}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="orange" onClick={() => openCreateModal(false)}>
          Cancel
        </Button>

        <Button color="green" onClick={() => createSale()}>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default SalesModalCreate;
