import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../pages/CartDetail";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";


function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:name" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="/product/add" Component={ProductAdd} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Dashboard;
