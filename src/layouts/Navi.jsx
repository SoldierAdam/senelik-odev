import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Container,
} from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useSelector } from "react-redux";

function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(){
    setIsAuthenticated(false)
  }

  function handleSignIn(){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
