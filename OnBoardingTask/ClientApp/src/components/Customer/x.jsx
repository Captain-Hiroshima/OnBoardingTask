import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import axios from "axios";

function CustomerModalDelete(props) {
  const [open, setOpen] = React.useState(false);
  const { refresh, itemSelected } = props;

  console.log(itemSelected);

  const DeleteCustomer = (id) => {
    axios
      .delete(`Customers/DeleteCustomer/${id}`)
      .then((res) => {
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
      trigger={<Button color="red">Delete</Button>}
    >
      <Modal.Header>Delete Item</Modal.Header>
      <Header>Are you sure you want to delete this item?</Header>
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
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yes, Damn It!"
          labelPosition="right"
          icon="trash"
          onClick={(() => setOpen(false), () => DeleteCustomer(itemSelected))}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CustomerModalDelete;
