import React, { useState } from "react";
import { Button, Modal, Form, Select } from "semantic-ui-react";
import axios from "axios";

function SalesModalEdit(props) {
  const [open, setOpen] = React.useState(false);
  const {
    refresh,
    id,
    products,
    customers,
    stores,
    productId,
    customerId,
    storeId,
    dateSold,
  } = props;

  const [productIdEdit, setproductId] = useState();
  const [customerIdEdit, setcustomerId] = useState();
  const [storeIdEdit, setstoreId] = useState();
  const [dateSoldEdit, setdateSold] = useState();

  const customerArray = customers.map((c) => {
    return { key: c.id, value: c.id, text: c.name };
  });

  const productArray = products.map((p) => {
    return { key: p.id, value: p.id, text: p.name };
  });

  const storeArray = stores.map((s) => {
    return { key: s.id, value: s.id, text: s.name };
  });

  const editCustomer = (id) => {
    axios
      .put(`Sales/PutSales/${id}`, {
        id: id,
        productId: productIdEdit,
        customerId: customerIdEdit,
        storeId: storeIdEdit,
        dateSold: dateSoldEdit,
      })
      .then((res) => {
        setOpen(false);
        refresh();
      })
      .catch((err) => {});
  };

  const handleSelectChangeProduct = (event, { value }) => {
    console.log(value);
    setproductId(value);
  };
  const handleSelectChangeCustomer = (event, { value }) => {
    console.log(value);
    setcustomerId(value);
  };
  const handleSelectChangeStore = (event, { value }) => {
    console.log(value);
    setstoreId(value);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="orange">Edit</Button>}
    >
      <Modal.Header>Edit Item</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Date Sold</label>
              <input
                defaultValue={dateSold}
                onChange={(e) => setdateSold(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>ProductID</label>
              <Select
                defaultValue={productId}
                options={productArray}
                onChange={handleSelectChangeProduct}
              />
            </Form.Field>
            <Form.Field>
              <label>CustomerID</label>
              <Select
                defaultValue={customerId}
                options={customerArray}
                onChange={handleSelectChangeCustomer}
              />
            </Form.Field>
            <Form.Field>
              <label>Store</label>
              <Select
                defaultValue={storeId}
                options={storeArray}
                onChange={handleSelectChangeStore}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          color="green"
          content="Yes"
          labelPosition="right"
          icon="check"
          onClick={() => editCustomer(id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default SalesModalEdit;
