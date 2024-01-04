import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown,DropdownDivider,DropdownItem,DropdownMenu,Label } from "semantic-ui-react";

function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <DropdownMenu>
          {
            cartItems.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.productName}
                <Label>
                  {cartItem.quantity}
                </Label>
              </DropdownItem>
            ))
          }
          <DropdownDivider/>
          <DropdownItem as={NavLink} to="/cart">Sepete git</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default CartSummary;
