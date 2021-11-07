import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import axios from "axios";

function CustomerModalDelete(props) {
  const [open, setOpen] = React.useState(false);
  const { refresh, itemSelected } = props;

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
