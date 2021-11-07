import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

function ProductModalDelete(props) {
  const [open, setOpen] = React.useState(false);
  const { refresh, itemId, itemName, itemPrice } = props;

  const [name, setName] = useState(itemName);
  const [price, setPrice] = useState(itemPrice);

  const editProduct = (id) => {
    axios
      .put(`Products/PutProduct/${id}`, {
        id: itemId,
        name: name,
        price: price,
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
              <label>Price</label>
              <input
                defaultValue={itemPrice}
                onChange={(e) => setPrice(e.target.value)}
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
          content="Edit"
          labelPosition="right"
          icon="check"
          onClick={() => editProduct(itemId)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ProductModalDelete;
