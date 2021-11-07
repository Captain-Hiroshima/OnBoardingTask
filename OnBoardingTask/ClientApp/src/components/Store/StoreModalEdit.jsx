import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

function StoreModalEdit(props) {
  const [open, setOpen] = React.useState(false);
  const { refresh, itemId, itemName, itemAddress } = props;

  const [name, setName] = useState(itemName);
  const [address, setAddress] = useState(itemAddress);

  const editProduct = (id) => {
    axios
      .put(`Stores/PutStore/${id}`, {
        id: itemId,
        name: name,
        address: address,
      })
      .then((res) => {
        setOpen(false);
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="orange">Edit</Button>}
    >
      <Modal.Header>Edit Product</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Product Name</label>
              <input
                placeholder="Name"
                defaultValue={itemName}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input
                defaultValue={itemAddress}
                onChange={(e) => setAddress(e.target.value)}
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
          content="Yes"
          labelPosition="right"
          icon="check"
          onClick={() => editProduct(itemId)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default StoreModalEdit;
