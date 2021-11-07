import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

function StoreModalCreate(props) {
  const { open, openCreateModal, fetchStore } = props;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const createStore = () => {
    axios
      .post("Stores/PostStore", {
        name: name,
        address: address,
      })
      .then((res) => {
        openCreateModal(false);
        setName("");
        setAddress("");
        fetchStore();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Modal open={open}>
      <Modal.Header>Create New Store</Modal.Header>
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
              <label>Address</label>
              <input
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Field>
            {/* <Button type="submit">Submit</Button> */}
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="orange" onClick={() => openCreateModal(false)}>
          Cancel
        </Button>

        <Button color="green" onClick={() => createStore()}>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default StoreModalCreate;
