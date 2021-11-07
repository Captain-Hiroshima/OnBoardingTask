import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

function CustomerModalCreate(props) {
  //   const [open, setOpen] = React.useState(false);
  const { open, openCreateModal, fetchCustomer } = props;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const createCustomer = () => {
    axios
      .post("Customers/PostCustomer", {
        name: name,
        address: address,
      })
      .then((res) => {
        openCreateModal(false);
        setName("");
        setAddress("");
        fetchCustomer();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Modal open={open}>
      <Modal.Header>Create New Customer</Modal.Header>
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
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => openCreateModal(false)}>
          Cancel
        </Button>

        <Button color="green" onClick={() => createCustomer()}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CustomerModalCreate;
