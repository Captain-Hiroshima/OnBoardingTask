import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import axios from "axios";

function SalesModalDelete(props) {
  const [open, setOpen] = React.useState(false);
  const { refresh, itemSelected } = props;

  const DeleteSales = (id) => {
    axios
      .delete(`Sales/DeleteSales/${id}`)
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
      <Modal.Header>You are about to delete a sale record</Modal.Header>
      <Header>Are you sure you want to delete this item?</Header>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Delete"
          labelPosition="right"
          icon="trash"
          onClick={(() => setOpen(false), () => DeleteSales(itemSelected))}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default SalesModalDelete;
