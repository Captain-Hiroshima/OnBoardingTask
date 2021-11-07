import React from "react";
import { Table } from "semantic-ui-react";
import SalesModalDelete from "./SalesModalDelete";
import SalesModalEdit from "./SalesModalEdit";

const SalesTable = (props) => {
  const { sales, refresh, customers, products, stores } = props;

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Product ID</Table.HeaderCell>
          <Table.HeaderCell>Customer ID</Table.HeaderCell>
          <Table.HeaderCell>Store ID</Table.HeaderCell>
          <Table.HeaderCell>DateSold</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {sales.map((s) => {
          return (
            <Table.Row key={s.id}>
              <Table.Cell>{s.id}</Table.Cell>
              <Table.Cell>{s.productId}</Table.Cell>
              <Table.Cell>{s.customerId}</Table.Cell>
              <Table.Cell>{s.storeId}</Table.Cell>
              <Table.Cell>{s.dateSold}</Table.Cell>
              <Table.Cell>
                <SalesModalEdit
                  refresh={refresh}
                  id={s.id}
                  productId={s.productId}
                  customerId={s.customerId}
                  storeId={s.storeId}
                  dateSold={s.dateSold}
                  customers={customers}
                  products={products}
                  stores={stores}
                />
              </Table.Cell>
              <Table.Cell>
                <SalesModalDelete itemSelected={s.id} refresh={refresh} />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
export default SalesTable;
