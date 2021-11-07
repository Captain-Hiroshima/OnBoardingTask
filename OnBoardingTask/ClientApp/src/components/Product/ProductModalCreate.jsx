import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

function ProductModalCreate(props) {
  //   const [open, setOpen] = React.useState(false);
  const { open, openCreateModal, fetchProduct } = props;

  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const createProduct = () => {
    axios
      .post("Products/PostProduct", {
        name: name,
        price: price,
      })
      .then((res) => {
        openCreateModal(false);
        setName("");
        setPrice();
        fetchProduct();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Modal open={open}>
      <Modal.Header>Create New Product</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="orange" onClick={() => openCreateModal(false)}>
          Cancel
        </Button>

        <Button color="green" onClick={() => createProduct()}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ProductModalCreate;
