import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Label, Menu, Table } from "semantic-ui-react";
import { addToCart } from "../store/actions/cartActions";
import ProductService from "../services/productService";
import {toast} from "react-toastify"; 

function ProductList() {

    const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    const handleAddToCart=(product) =>{
      dispatch(addToCart(product));
      toast.success(`${product.productName}  added to cart!`);
    }

    // useEffect(() => {
    //     let productService = new ProductService();
    //     productService.getProducts().then(result => setProducts(result.data.data))
    // },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Units in Stock</Table.HeaderCell>
            <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
                </Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={()=>handleAddToCart(product)} > SEPETE EKLE </Button>
                </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default ProductList;
