import React from "react";
import { Table } from "semantic-ui-react";
import CustomerModalDelete from "./CustomerModalDelete";
import CustomerModalEdit from "./CustomerModalEdit";

const CustomerTable = (props) => {
  const { customer, refresh } = props;

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {customer.map((c) => {
          return (
            <Table.Row key={c.id}>
              <Table.Cell>{c.id}</Table.Cell>
              <Table.Cell>{c.name}</Table.Cell>
              <Table.Cell>{c.address}</Table.Cell>
              <Table.Cell>
                <CustomerModalEdit
                  refresh={refresh}
                  itemId={c.id}
                  itemName={c.name}
                  itemAddress={c.address}
                />
              </Table.Cell>
              <Table.Cell>
                <CustomerModalDelete itemSelected={c.id} refresh={refresh} />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
export default CustomerTable;
