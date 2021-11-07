import React from "react";
import { Table } from "semantic-ui-react";
import StoreModalDelete from "./StoreModalDelete";
import ProductModalEdit from "./StoreModalEdit";

const StoreTable = (props) => {
  const { store, refresh } = props;

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
        {store.map((s) => {
          return (
            <Table.Row key={s.id}>
              <Table.Cell>{s.id}</Table.Cell>
              <Table.Cell>{s.name}</Table.Cell>
              <Table.Cell>{s.address}</Table.Cell>
              <Table.Cell>
                <ProductModalEdit
                  refresh={refresh}
                  itemId={s.id}
                  itemName={s.name}
                  itemAddress={s.address}
                />
              </Table.Cell>
              <Table.Cell>
                <StoreModalDelete itemSelected={s.id} refresh={refresh} />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
export default StoreTable;
