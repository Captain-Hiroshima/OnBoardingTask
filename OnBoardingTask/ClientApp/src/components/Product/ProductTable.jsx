import React from "react";
import { Table } from "semantic-ui-react";
import ProductModalDelete from "./ProductModalDelete";
import ProductModalEdit from "./ProductModalEdit";

const ProductTable = (props) => {
  const { product, refresh } = props;

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {product.map((p) => {
          return (
            <Table.Row key={p.id}>
              <Table.Cell>{p.id}</Table.Cell>
              <Table.Cell>{p.name}</Table.Cell>
              <Table.Cell>$ {p.price}</Table.Cell>
              <Table.Cell>
                <ProductModalEdit
                  refresh={refresh}
                  itemId={p.id}
                  itemName={p.name}
                  itemPrice={p.price}
                />
              </Table.Cell>
              <Table.Cell>
                <ProductModalDelete refresh={refresh} itemSelected={p.id} />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
export default ProductTable;
